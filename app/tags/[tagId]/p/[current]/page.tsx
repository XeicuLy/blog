import ArticleList from '@/components/feature/ArticleList';
import Pagination from '@/components/ui/Pagination';
import { LIMIT } from '@/constants';
import { getList } from '@/libs/microcms';

type Props = {
  params: {
    tagId: string;
    current: string;
  };
};

export const revalidate = 60;

export default async function Page({ params }: Props) {
  const { tagId } = params;
  const current = parseInt(params.current as string, 10);
  const data = await getList({
    limit: LIMIT,
    offset: LIMIT * (current - 1),
    filters: `tags[contains]${tagId}`,
  });
  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} current={current} basePath={`/tags/${tagId}`} />
    </>
  );
}
