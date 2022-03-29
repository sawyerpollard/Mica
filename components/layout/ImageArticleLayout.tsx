import { PostsOrPages } from '@tryghost/content-api';

import ArticleLink from '../ArticleLink';

export type ImageArticleData = {
    articles: PostsOrPages;
    heading?: string;
};

export default function ImageArticleLayout({ articles, heading }: ImageArticleData) {
    return (
        <section className="py-6">
            {heading && <h1 className="mb-6 text-center font-serif font-bold text-5xl">{heading}</h1>}
            <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
                {articles.map((article, index) => (
                    <ArticleLink key={index} article={article} showImage showDate />
                ))}
            </div>
        </section>
    );
}
