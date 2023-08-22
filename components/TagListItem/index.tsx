import Link from 'next/link';

import { Tag } from '@/libs/microcms';

type Props = {
  tag: Tag;
  hasLink?: boolean;
};

export default function TagListItem({ tag, hasLink = true }: Props) {
  if (hasLink) {
    return (
      <Link href={`/tags/${tag.id}`} className='whitespace-nowrap rounded bg-gray-200 px-2 py-1 text-sm'>
        #{tag.name}
      </Link>
    );
  }
  return <span className='whitespace-nowrap rounded bg-gray-200 px-2 py-1 text-sm'>#{tag.name}</span>;
}
