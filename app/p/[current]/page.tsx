import Image from 'next/image';
import Link from 'next/link';

import { Pagenation } from '@/components/feature/Pagenation';
import { LIMIT } from '@/constants';
import { getList } from '@/libs/microcms';
import { formatDate } from '@/libs/utils';

import styles from './page.module.css';

type Props = {
  params: {
    current: string;
  };
};

export default async function Page({ params }: Props) {
  const current = parseInt(params.current as string, 10);
  const data = await getList({
    limit: LIMIT,
    offset: LIMIT * (current - 1),
  });
  return (
    <div>
      <ul>
        {data.contents.map((article) => (
          <li key={article.id} className={styles.list}>
            <Link href={`/articles/${article.id}`} className={styles.link}>
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
                    className={styles.image}
                    width={article.thumbnail?.width}
                    height={article.thumbnail?.height}
                  />
                </picture>
              ) : (
                <Image className={styles.image} src='/no-image.png' alt='No Image' width={1200} height={630} />
              )}
              <dl className={styles.content}>
                <dt className={styles.title}>{article.title}</dt>
                <dd>{formatDate(article.publishedAt || article.createdAt)}</dd>
              </dl>
            </Link>
          </li>
        ))}
      </ul>
      <Pagenation totalCount={data.totalCount} current={current} />
    </div>
  );
}
