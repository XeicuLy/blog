import { Tag } from '@/libs/microcms';

import TagListItem from '../TagListItem';

type Props = {
  tags?: Tag[];
  hasLink?: boolean;
};

export default function TagList({ tags, hasLink = true }: Props) {
  if (!tags) {
    return null;
  }
  return (
    <ul className='mx-0 my-2 flex flex-wrap gap-2'>
      {tags.map((tag) => (
        <li key={tag.id}>
          <TagListItem tag={tag} hasLink={hasLink} />
        </li>
      ))}
    </ul>
  );
}
