import type { GetStaticProps } from 'next';
import Head from 'next/head';

import { getOneTwoOneData, getArticleGridData, getTwoOneData } from '../lib/GetLayoutData';

import OneTwoOneArticleLayout, { OneTwoOneData } from '../components/layout/OneTwoOneArticleLayout';
import TwoOneArticleLayout, { TwoOneData } from '../components/layout/TwoOneArticleLayout';
import ArticleGridLayout, { ArticleGridData } from '../components/layout/ArticleGridLayout';
import VerticalLayout from '../components/layout/VerticalLayout';

export default function Frontpage(props: {
  oneTwoOneData: OneTwoOneData,
  twoOneData: TwoOneData,
  sportsGridData: ArticleGridData,
  artsGridData: ArticleGridData
}) {
  return (
    <div>
      <Head>
        <link href='https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap' rel='stylesheet' />
      </Head>
      <VerticalLayout>
      <OneTwoOneArticleLayout {...props.oneTwoOneData}/>
      <TwoOneArticleLayout {...props.twoOneData} />
      <ArticleGridLayout {...props.sportsGridData} />
      <ArticleGridLayout {...props.artsGridData} />
      </VerticalLayout>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const oneTwoOneData = await getOneTwoOneData('news', 'hash-featured', 'opinion');

  const twoOneData = await getTwoOneData('news', 'opinion');

  const sportsGridData = await getArticleGridData('sports', 8);

  const artsGridData = await getArticleGridData('arts-and-living', 8);

  if (!oneTwoOneData ||!twoOneData || !sportsGridData || !artsGridData) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      oneTwoOneData,
      twoOneData,
      sportsGridData,
      artsGridData
    }
  }
}
