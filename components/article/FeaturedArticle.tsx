import { PostOrPage } from '@tryghost/content-api';

import { optimizeGhostImageUrl } from '../../lib/GhostTools';

import { ArticleInfo } from './ArticleInfo';

export default function FeaturedArticle({ article }: { article: PostOrPage | PostOrPage[] }) {
    if (Array.isArray(article)) article = article[0];
    return (
        <div className="text-center text-black hover:text-black/60 transition duration-500 flex flex-col gap-4">
            <a href={article.url}>
                {article.feature_image && <img className="mb-4 aspect-video object-cover w-full" src={optimizeGhostImageUrl(article.feature_image, 'w1600')} />}
                <h2 className="font-serif text-3xl font-medium mb-4">{article.title}</h2>
                <p className="font-serif text-xl">{article.excerpt}</p>
            </a>
            <ArticleInfo article={article} showDate />
        </div>
    );
}
