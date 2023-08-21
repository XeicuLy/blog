import { LIMIT } from '@/constants';

import styles from './index.module.css';

type Props = {
  totalCount: number;
  current?: number;
};

export const Pagenation = ({ totalCount, current = 1 }: Props) => {
  const pages = Array.from({ length: Math.ceil(totalCount / LIMIT) }).map((_, i) => i + 1);
  return (
    <ul className={styles.container}>
      {pages.map((p) => (
        <li className={styles.list} key={p}>
          {current !== p ? (
            <a href={`/p/${p}`} className={styles.item}>
              {p}
            </a>
          ) : (
            <span className={`${styles.item} ${styles.current}`}>{p}</span>
          )}
        </li>
      ))}
    </ul>
  );
};
