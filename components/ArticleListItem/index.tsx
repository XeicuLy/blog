import Image from 'next/image';
import Link from 'next/link';

import { Article } from '@/libs/microcms';

import PublishedDate from '../Date';
import TagList from '../TagList';

type Props = {
  article: Article;
};

export default function ArticleListItem({ article }: Props) {
  return (
    <li className='mb-10'>
      <Link href={`/articles/${article.id}`} className='flex gap-10 sm:block'>
        {article.thumbnail ? (
          <picture>
            <source
              type='image/webp'
              media='(max-width: 640px)'
              srcSet={`${article.thumbnail?.url}?fm=webp&w=414 1x, ${article.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
            />
            <source
              type='image/webp'
              srcSet={`${article.thumbnail?.url}?fm=webp&fit=crop&w=240&h=126 1x, ${article.thumbnail?.url}?fm=webp&fit=crop&w=240&h=126&dpr=2 2x`}
            />
            <img
              src={article.thumbnail?.url || `/no-image.png`}
              alt=''
              className='h-auto w-60 sm:mb-4 sm:w-full'
              width={article.thumbnail?.width}
              height={article.thumbnail?.height}
            />
          </picture>
        ) : (
          <Image
            className='h-auto w-60 sm:mb-4 sm:w-full'
            src='/no-image.png'
            alt='No Image'
            width={1200}
            height={630}
          />
        )}
        <dl>
          <dt className='mb-2 text-2xl font-bold sm:text-xl'>{article.title}</dt>
          <dd>
            <TagList tags={article.tags} hasLink={false} />
          </dd>
          <dd>
            <PublishedDate date={article.publishedAt || article.createdAt} />
          </dd>
        </dl>
      </Link>
    </li>
  );
}
