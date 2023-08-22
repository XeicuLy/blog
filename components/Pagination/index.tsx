import Link from 'next/link';

import { LIMIT } from '@/constants';

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
  q?: string;
};

export default function Pagination({ totalCount, current = 1, basePath = '', q }: Props) {
  const pages = Array.from({ length: Math.ceil(totalCount / LIMIT) }).map((_, i) => i + 1);
  return (
    <ul className='mt-6 flex items-center justify-center p-6'>
      {pages.map((p) => (
        <li className='mx-1 my-0' key={p}>
          {current !== p ? (
            <Link
              href={`${basePath}/p/${p}` + (q ? `?q=${q}` : '')}
              className='flex h-9 w-9 items-center justify-center rounded'
            >
              {p}
            </Link>
          ) : (
            <span className='flex h-9 w-9 items-center justify-center rounded bg-gray-200'>{p}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
