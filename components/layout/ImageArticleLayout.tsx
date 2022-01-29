import { PostsOrPages } from '@tryghost/content-api';

import ArticleLink from '../ArticleLink';

export type ImageArticleData = {
    articles: PostsOrPages;
    heading?: string;
};

export default function ImageArticleLayout({ articles, heading }: ImageArticleData) {
    return (
        <section>
            {heading && <h1 className="mb-10 text-center font-serif font-medium text-6xl">{heading}</h1>}
            <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-8 ">
                {articles.map((article, index) => (
                    <ArticleLink key={index} article={article} showImage showDate />
                ))}
            </div>
        </section>
    );
}
