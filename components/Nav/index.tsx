import SearchField from '@/components/SearchField';
import TagList from '@/components/TagList';
import { Tag } from '@/libs/microcms';

type Props = {
  tags: Tag[];
};

export default function Nav({ tags }: Props) {
  return (
    <nav className='mb-10 flex flex-col items-center justify-center gap-2 border-b border-solid border-gray-300 px-6 pb-6 pt-0'>
      <SearchField />
      <TagList tags={tags} />
    </nav>
  );
}
