import { type Article } from '@/libs/microcms';
import { formatRichText } from '@/libs/utils';

import PublishedDate from '../Date';
import TagList from '../TagList';

import './index.css';

type Props = {
  data: Article;
};

export default function Article({ data }: Props) {
  return (
    <main className='flex flex-col items-center justify-center'>
      <h1 className='mb-6 text-center text-4xl sm:mb-5 sm:text-center sm:text-3xl'>{data.title}</h1>
      <TagList tags={data.tags} />
      <p className='mx-10 my-6 text-center text-base text-gray-500 sm:mb-0 sm:mt-6'>{data.description}</p>
      <div className='mb-16 flex items-center sm:mb-10 sm:text-center'>
        {data.writer && (
          <div className='flex items-center justify-center border-r border-solid border-gray-500 pr-10 sm:mr-6 sm:pr-6'>
            <picture>
              <source
                type='image/webp'
                srcSet={`${data.writer?.image?.url}?fm=webp&fit=crop&w=48&h=48 1x, ${data.writer?.image?.url}?fm=webp&fit=crop&w=48&h=48&dpr=2 2x`}
              />
              <img
                src={data.writer?.image?.url}
                alt=''
                className='block h-12 w-12 rounded-full sm:h-8 sm:w-8'
                width={data.writer?.image?.width}
                height={data.writer?.image?.height}
              />
            </picture>
            <span className='ml-4'>{data.writer?.name}</span>
          </div>
        )}
        <PublishedDate date={data.publishedAt || data.createdAt} />
      </div>
      <picture>
        <source
          type='image/webp'
          media='(max-width: 640px)'
          srcSet={`${data.thumbnail?.url}?fm=webp&w=414 1x, ${data.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
        />
        <source
          type='image/webp'
          srcSet={`${data.thumbnail?.url}?fm=webp&fit=crop&w=960&h=504 1x, ${data.thumbnail?.url}?fm=webp&fit=crop&w=960&h=504&dpr=2 2x`}
        />
        <img
          src={data.thumbnail?.url}
          alt=''
          className='mb-16 h-auto w-960 sm:mb-10 sm:w-full'
          width={data.thumbnail?.width}
          height={data.thumbnail?.height}
        />
      </picture>
      <div
        className='content w-720'
        dangerouslySetInnerHTML={{
          __html: `${formatRichText(data.content)}`,
        }}
      />
    </main>
  );
}
