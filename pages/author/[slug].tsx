import type { GetStaticProps, GetStaticPaths } from 'next';
import type { Author, PostOrPage } from '@tryghost/content-api';

import { getGhostAuthor, getGhostAuthors, getGhostPosts } from '../../lib/GetGhost';
import { naturalDateString } from '../../components/PublishDate';

import WideArticleList from '../../components/WideArticleList';

export default function AuthorPage(props: {
    author: Author;
    articles: PostOrPage[];
}) {
    const firstArticle = props.articles[props.articles.length - 1];
    const lastArticle = props.articles[0];

    return (
        <div className="mx-auto container overflow-x-hidden max-w-screen-lg p-8 flex flex-col gap-8">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="flex flex-col gap-4">
                    <h1 className="font-serif text-4xl sm:text-6xl font-extrabold whitespace-nowrap">{props.author.name}</h1>
                    {props.author.bio && <p className="max-w-prose">{props.author.bio}</p>}
                </div>
                <div className="flex flex-col gap-2 whitespace-nowrap text-sm text-center md:text-right">
                    <p>Number of Articles: {props.articles.length}</p>
                    {firstArticle && firstArticle.published_at && <p>First Article: {naturalDateString(new Date(firstArticle.published_at))}</p>}
                    {lastArticle && lastArticle.published_at && <p>Latest Article: {naturalDateString(new Date(lastArticle.published_at))}</p>}
                </div>
            </div>
            <WideArticleList articles={props.articles} showImages showDate />
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

    const articles = await getGhostPosts({ limit: 'all', filter: `author:${author.slug}`, include: 'authors' });

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
