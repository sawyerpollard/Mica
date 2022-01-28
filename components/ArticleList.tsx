import { PostsOrPages } from '@tryghost/content-api';

import ArticleLink from './ArticleLink';

export default function ArticleList({
    articles,
    showImages,
    showDate,
}: {
    articles: PostsOrPages;
    showImages?: boolean;
    showDate?: boolean;
}) {
    return (
        <section>
            {articles.map((article, index) => (
                <div key={index} className="py-6 first:pt-0 last:pb-0 border-t first:border-t-0 border-black/60">
                    <ArticleLink article={article} showImage={showImages} showDate={showDate} />
                </div>
            ))}
        </section>
    );
}
