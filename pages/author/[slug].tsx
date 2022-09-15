import type { GetStaticProps, GetStaticPaths } from 'next';
import type { Author, PostsOrPages } from '@tryghost/content-api';

import { getGhostAuthor, getGhostAuthors, getGhostPosts } from '../../lib/GetGhost';

import WideArticleList from '../../components/WideArticleList';

export default function AuthorPage(props: {
    author: Author;
    articles: PostsOrPages;
}) {
    return (
        <div className="mx-auto container p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="flex flex-col gap-8 col-span-1">
                    <h1 className="font-serif text-5xl text-purple-900 font-bold">{props.author.name}</h1>
                    {props.author.bio && <p>{props.author.bio}</p>}
                </div>
                <div className="col-span-2">
                    <WideArticleList articles={props.articles} showDate />
                </div>
            </div>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const author = await getGhostAuthor({ slug: params?.slug });

    if (!author) {
        return {
            notFound: true,
        };
    }

    const articles = await getGhostPosts({ filter: `author:${author.slug}`, include: 'authors'});

    return {
        props: {
            author,
            articles,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const authors = await getGhostAuthors({ limit: 'all' });

    if (!authors) {
        return {
            paths: [],
            fallback: false,
        };
    }

    const paths = authors.map((author) => ({
        params: {
            slug: author.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
};
