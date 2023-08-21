import ArticleList from '@/components/feature/ArticleList';
import Pagination from '@/components/ui/Pagination';
import { LIMIT } from '@/constants';
import { getList } from '@/libs/microcms';

export const revalidate = 0;

export default async function Page() {
  const data = await getList({
    limit: LIMIT,
  });
  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} />
    </>
  );
}
