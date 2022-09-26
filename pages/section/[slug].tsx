import React from 'react';
import type { GetStaticProps, GetStaticPaths } from 'next';
import type { Tag } from '@tryghost/content-api';

import Sourcer, { Source } from '../../lib/Sourcer';
import { getGhostTag, getGhostTags } from '../../lib/GetGhost';

import WideArticleList from '../../components/article/WideArticleList';

export default function SectionPage(props: {
    tag: Tag;
    sources: Source[]
}) {
    const style: React.CSSProperties = {
        textDecorationColor: props.tag.accent_color ?? '#000000',
    };

    return (
        <div className="mx-auto container overflow-x-hidden px-4 py-12 flex flex-col gap-16 items-center">
            <h1 style={style} className="max-w-screen-md font-serif font-bold italic text-5xl sm:text-6xl underline underline-offset-4 decoration-4 whitespace-nowrap">
                {props.tag.name}
            </h1>
            <div className="flex flex-col items-center gap-16">
                {props.sources[0].length > 0 &&
                    <div className="max-w-screen-lg">
                        <WideArticleList showImages showDate articles={props.sources[0]} />
                    </div>
                }
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
    const sources = [
            await sourcer.get(`tag:${tag.slug}`, 100),
    ];

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
