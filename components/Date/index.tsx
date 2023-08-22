import Image from 'next/image';

import { formatDate } from '@/libs/utils';

type Props = {
  date: string;
};

export default function PublishedDate({ date }: Props) {
  return (
    <span className='mx-0 my-3 flex items-center gap-2 pl-2 leading-4'>
      <Image src='/clock.svg' alt='' width={16} height={16} priority />
      {formatDate(date)}
    </span>
  );
}
