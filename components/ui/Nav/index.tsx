import TagList from '@/components/feature/TagList';
import { Tag } from '@/types/type';

import SearchField from '../SearchField';

import styles from './index.module.css';

type Props = {
  tags: Tag[];
};

export default function Nav({ tags }: Props) {
  return (
    <nav className={styles.nav}>
      <SearchField />
      <TagList tags={tags} />
    </nav>
  );
}
