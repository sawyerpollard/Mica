import { PostsOrPages } from '@tryghost/content-api';

import ArticleLink from '../article/ArticleLink';

export type ArticleGridData = {
    articles: PostsOrPages;
    heading?: string;
};

export default function ArticleGridLayout({ articles, heading }: ArticleGridData) {
    return (
        <section>
            {heading && <h1 className="mb-10 text-center font-serif font-medium text-6xl">{heading}</h1>}
            <div className="grid grid-flow-row grid-cols-2 lg:grid-cols-4 gap-8 ">
                {articles.map((article, index) => (
                    <ArticleLink key={index} article={article} showImage={false} />
                ))}
            </div>
        </section>
    );
}
