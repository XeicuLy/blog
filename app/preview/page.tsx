import Article from '@/components/feature/Article';
import { getDetail } from '@/libs/microcms';

import NotFound from '../not-found';

type Props = {
  searchParams: {
    slug?: string;
    draftKey?: string;
  };
};

// キャッシュ利用せず、SSR扱い
export const revalidate = 0;

export default async function Page({ searchParams }: Props) {
  if (!searchParams.slug || !searchParams.draftKey) {
    NotFound();
  }
  const data = await getDetail(searchParams.slug, {
    draftKey: searchParams.draftKey,
  });

  return <Article data={data} />;
}
