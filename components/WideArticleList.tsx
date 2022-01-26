import { PostsOrPages } from '@tryghost/content-api';

import WideArticleLink from './WideArticleLink';

export default function WideArticleList({ articles, showImages }: { articles: PostsOrPages; showImages?: boolean }) {
    return (
        <section>
            {articles.map((article, index) => (
                <div key={index} className="py-6 first:pt-0 last:pb-0 border-t first:border-t-0 border-black/60">
                    <WideArticleLink article={article} showImage={showImages} />
                </div>
            ))}
        </section>
    );
}
