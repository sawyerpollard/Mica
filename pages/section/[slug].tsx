/* eslint-disable react/jsx-key */

import type { GetStaticProps, GetStaticPaths } from 'next';
import type { Tag } from '@tryghost/content-api';

import Sourcer, { Source } from '../../lib/Sourcer';
import { getGhostTag, getGhostTags } from '../../lib/GetGhost';

import WideArticleList from '../../components/WideArticleList';
import TwoOneArticleLayout from '../../components/layout/TwoOneArticleLayout';
import FeaturedArticle from '../../components/FeaturedArticle';

export default function SectionPage(props: {
    tag: Tag;
    sources: Source[]
}) {
    return (
        <div className="mx-auto container overflow-x-hidden px-4 py-12 flex flex-col gap-16 items-center">
            <h1 className="max-w-screen-md font-serif font-bold italic text-5xl sm:text-6xl underline underline-offset-4 decoration-4 whitespace-nowrap">
                {props.tag.name}
            </h1>
            <div className="flex flex-col items-center gap-16">
                <div className="max-w-screen-md">
                    <FeaturedArticle article={props.sources[0]} />,
                </div>

                <div className="max-w-screen-lg">
                    <WideArticleList showImages showDate articles={props.sources[1]} />,
                </div>

                <div className="max-w-screen-md">
                    <FeaturedArticle article={props.sources[2]} />,
                </div>

                <TwoOneArticleLayout leftArticles={props.sources[3]} rightArticles={props.sources[4]} />,

                <div className="max-w-screen-lg">
                    <WideArticleList showImages showDate articles={props.sources[5]} />,
                </div>
            </div>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const tag = await getGhostTag({ slug: params?.slug });

    if (!tag) {
        return {
            notFound: true,
        };
    }

    const sourcer = new Sourcer();
    let sources = [];
    try {
        sources = [
            await sourcer.get(`tag:${tag.slug}+feature_image:-null`, 1),
            await sourcer.get(`tag:${tag.slug}+feature_image:-null`, 2),
            await sourcer.get(`tag:${tag.slug}+feature_image:-null`, 1),
            await sourcer.get(`tag:${tag.slug}+feature_image:-null`, 2),
            await sourcer.get(`tag:${tag.slug}`, 4),
            await sourcer.get(`tag:${tag.slug}`, 40),
        ];
    } catch (err) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            tag,
            sources,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const tags = await getGhostTags({ limit: 'all' });

    if (!tags) {
        return {
            paths: [],
            fallback: false,
        };
    }

    const paths = tags.map((tag) => ({
        params: {
            slug: tag.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
};
