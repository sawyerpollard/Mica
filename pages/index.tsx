import type { GetStaticProps } from 'next';
import Head from 'next/head';

import { getOneTwoOneData, getArticleGridData, getTwoOneData, getImageArticleData } from '../lib/GetLayoutData';

import OneTwoOneArticleLayout, { OneTwoOneData } from '../components/layout/OneTwoOneArticleLayout';
import TwoOneArticleLayout, { TwoOneData } from '../components/layout/TwoOneArticleLayout';
import ArticleGridLayout, { ArticleGridData } from '../components/layout/ArticleGridLayout';
import ImageArticleLayout, { ImageArticleData } from '../components/layout/ImageArticleLayout';
import VerticalLayout from '../components/layout/VerticalLayout';

export default function Home(props: {
    oneTwoOneData: OneTwoOneData;
    twoOneData: TwoOneData;
    crosswordGridData: ArticleGridData;
    sportsImageArticleData: ImageArticleData;
    artsImageArticleData: ImageArticleData;
}) {
    return (
        <div className="mx-auto container px-4">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap"
                    rel="stylesheet"
                />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>The Amherst Student</title>
            </Head>
            <VerticalLayout>
                <OneTwoOneArticleLayout {...props.oneTwoOneData} />
                <TwoOneArticleLayout {...props.twoOneData} />
                <ImageArticleLayout {...props.artsImageArticleData} />
                <ArticleGridLayout {...props.crosswordGridData} />
                <ImageArticleLayout {...props.sportsImageArticleData} />
            </VerticalLayout>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const oneTwoOneData = await getOneTwoOneData('news', 'hash-featured', 'opinion');

    const twoOneData = await getTwoOneData('news', 'opinion');

    const sportsImageArticleData = await getImageArticleData('sports', 6);

    const artsImageArticleData = await getImageArticleData('arts-and-living', 3);

    const crosswordGridData = await getArticleGridData('crossword', 4);

    if (!oneTwoOneData || !twoOneData || !sportsImageArticleData || !crosswordGridData || !artsImageArticleData) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            oneTwoOneData,
            twoOneData,
            crosswordGridData,
            sportsImageArticleData,
            artsImageArticleData,
        },
    };
};
