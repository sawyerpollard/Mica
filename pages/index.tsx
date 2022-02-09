import type { GetStaticProps } from 'next';
import Head from 'next/head';

import { getOneTwoOneData, getArticleGridData, getTwoOneData, getImageArticleData } from '../lib/GetLayoutData';

import OneTwoOneArticleLayout, { OneTwoOneData } from '../components/layout/OneTwoOneArticleLayout';
import TwoOneArticleLayout, { TwoOneData } from '../components/layout/TwoOneArticleLayout';
import ArticleGridLayout, { ArticleGridData } from '../components/layout/ArticleGridLayout';
import ImageArticleLayout, { ImageArticleData } from '../components/layout/ImageArticleLayout';
import VerticalLayout from '../components/layout/VerticalLayout';
import ShowcaseSquare from '../components/ShowcaseSquare';
import BannerAd from '../components/BannerAd';

export default function Home(props: {
    oneTwoOneData: OneTwoOneData;
    twoOneData: TwoOneData;
    crosswordGridData: ArticleGridData;
    sportsImageArticleData: ImageArticleData;
    artsImageArticleData: ImageArticleData;
}) {
    return (
        <div className="mx-auto container px-4 overflow-">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap"
                    rel="stylesheet"
                />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                
                <meta property="og:site_name" content="The Amherst Student" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="The Amherst Student" />
                <meta property="og:description" content="Founded in 1868, the Student remains the source for all news Amherst." />
                <meta property="og:url" content="https://amherststudent.com/" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="The Amherst Student" />
                <meta name="twitter:description" content="Founded in 1868, the Student remains the source for all news Amherst." />
                <meta name="twitter:url" content="https://amherststudent.com/" />

                <meta name="description" content="Founded in 1868, the Student remains the source for all news Amherst." />
                <title>The Amherst Student</title>
            </Head>
            <VerticalLayout>
                <OneTwoOneArticleLayout {...props.oneTwoOneData} />
                <TwoOneArticleLayout {...props.twoOneData} />
                <ImageArticleLayout {...props.artsImageArticleData} />
                <BannerAd
                    heading="Your ad here!"
                    description="Click to learn about advertisng with The Amherst student."
                    url={process.env.GHOST_URL + '/advertise'}
                />
                <ArticleGridLayout {...props.crosswordGridData} />
                <ImageArticleLayout {...props.sportsImageArticleData} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <ShowcaseSquare
                        heading="New podcasts out now!"
                        buttonText="Listen Now"
                        buttonUrl={process.env.GHOST_URL + '/section/podcast'}
                    />
                    <ShowcaseSquare
                        heading="Play today's crossword!"
                        buttonText="Solve Now"
                        buttonUrl={process.env.GHOST_URL + '/section/crossword'}
                    />
                </div>
            </VerticalLayout>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const oneTwoOneData = await getOneTwoOneData('hash-top-left', 'hash-featured', 'hash-top-right');

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
