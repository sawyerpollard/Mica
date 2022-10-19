import type { GetStaticProps } from 'next';
import Head from 'next/head';

import Config from '../lib/Config';
import Sourcer, { Source } from '../lib/Sourcer';

import OneTwoOneArticleLayout from '../components/layout/OneTwoOneArticleLayout';
import TwoOneArticleLayout from '../components/layout/TwoOneArticleLayout';
import ImageArticleLayout from '../components/layout/ImageArticleLayout';
import VerticalLayout from '../components/layout/VerticalLayout';
import BannerAd from '../components/info/BannerAd';
import FeaturedCartoon from '../components/article/FeaturedCartoon';

export default function Home(props: {
    sources: Source[]
}) {
    return (
        <div className="mx-auto container px-4 overflow-x-hidden">
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                
                <meta property="og:site_name" content={Config.meta.title} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={Config.meta.title} />
                <meta property="og:description" content={Config.meta.description} />
                <meta property="og:url" content={Config.meta.url} />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={Config.meta.title} />
                <meta name="twitter:description" content={Config.meta.description} />
                <meta name="twitter:url" content={Config.meta.url} />

                <meta name="description" content={Config.meta.description} />
                <title>{Config.meta.title}</title>
            </Head>
            <VerticalLayout>
                <OneTwoOneArticleLayout leftArticles={props.sources[0]} featuredArticle={props.sources[1]} rightArticles={props.sources[2]}>
                    <a href={props.sources[3][0].url} className="whitespace-nowrap mt-6 block text-center scale-90 hover:scale-100 transition bg-mammoth-900 hover:bg-mammoth-900/90 text-lg text-white uppercase font-bold p-4 rounded">Play the Crossword</a>
                </OneTwoOneArticleLayout>

                <TwoOneArticleLayout leftHeading="Top News" rightHeading="Opinion" leftArticles={props.sources[4]} rightArticles={props.sources[5]} />

                <ImageArticleLayout heading="Arts & Living" articles={props.sources[6]} />

                <BannerAd
                    url={'https://www.amherst.edu/news/events/presidential-scholars'}
                    imageUrl={'https://amherststudent.com/content/images/size/w1600/2022/10/ad-2.jpg'}
                />

                <ImageArticleLayout heading="The Week in Sports" articles={props.sources[7]} />

                <FeaturedCartoon article={props.sources[8]} />
            </VerticalLayout>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const sourcer = new Sourcer();
    const sources = [
        await sourcer.get('tag:hash-top-left', 5),
        await sourcer.get('tag:hash-top-center+feature_image:-null', 1),
        await sourcer.get('tag:hash-top-right', 2),
        await sourcer.get('tag:crossword', 1),
        await sourcer.get('tag:news+feature_image:-null', 2),
        await sourcer.get('tag:opinion', 4),
        await sourcer.get('tag:arts-and-living+feature_image:-null', 4),
        await sourcer.get('tag:sports+feature_image:-null', 8),
        await sourcer.get('tag:cartoon+feature_image:-null', 1),
    ];

    return {
        props: {
            sources,
        },
    };
};
