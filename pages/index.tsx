import type { GetStaticProps } from 'next';
import Head from 'next/head';

import { getOneTwoOneData, getTwoOneData, getImageArticleData } from '../lib/GetLayoutData';

import OneTwoOneArticleLayout, { OneTwoOneData } from '../components/layout/OneTwoOneArticleLayout';
import TwoOneArticleLayout, { TwoOneData } from '../components/layout/TwoOneArticleLayout';
import ImageArticleLayout, { ImageArticleData } from '../components/layout/ImageArticleLayout';
import VerticalLayout from '../components/layout/VerticalLayout';
import BannerAd from '../components/BannerAd';
import { getGhostPosts } from '../lib/GetGhost';
import { PostsOrPages } from '@tryghost/content-api';

export default function Home(props: {
    oneTwoOneData: OneTwoOneData;
    twoOneData: TwoOneData;
    crosswordData: PostsOrPages;
    sportsImageArticleData: ImageArticleData;
    artsImageArticleData: ImageArticleData;
}) {
    return (
        <div className="mx-auto container px-4 overflow-x-hidden">
            <Head>
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
                <OneTwoOneArticleLayout {...props.oneTwoOneData}>
                    <a href={props.crosswordData[0].url} className="whitespace-nowrap mt-6 block text-center scale-90 hover:scale-100 transition bg-mammoth-900 hover:bg-mammoth-900/90 text-lg text-white uppercase font-bold p-4 rounded">Play the Crossword</a>
                </OneTwoOneArticleLayout>
                <TwoOneArticleLayout {...props.twoOneData} />
                <ImageArticleLayout {...props.artsImageArticleData} />
                <BannerAd
                    heading="Your ad here!"
                    description="Click to learn about advertising with The Amherst Student."
                    url={process.env.GHOST_URL + '/advertise'}
                />
                <ImageArticleLayout {...props.sportsImageArticleData} />
            </VerticalLayout>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const oneTwoOneData = await getOneTwoOneData('hash-top-left', 'hash-top-center', 'hash-top-right');

    const twoOneData = await getTwoOneData('news', 'opinion');

    const sportsImageArticleData = await getImageArticleData('sports', 8);

    const artsImageArticleData = await getImageArticleData('arts-and-living', 4);

    const crosswordData = await getGhostPosts({ limit: 1, filter: 'tag:crossword', include: 'authors' });

    if (!oneTwoOneData || !twoOneData || !sportsImageArticleData || !crosswordData || !artsImageArticleData) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            oneTwoOneData,
            twoOneData,
            crosswordData,
            sportsImageArticleData,
            artsImageArticleData,
        },
    };
};
