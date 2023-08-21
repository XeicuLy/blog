import Article from '@/components/feature/Article';
import { getDetail } from '@/libs/microcms';

type Props = {
  params: {
    slug: string;
  };
};

const Page = async ({ params }: Props) => {
  const data = await getDetail(params.slug);

  return <Article data={data} />;
};

export default Page;
