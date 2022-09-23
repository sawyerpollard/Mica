import { PostOrPage } from '@tryghost/content-api';

import { optimizeGhostImageUrl } from '../lib/GhostTools';

export default function FeaturedCartoon({ article }: { article: PostOrPage | PostOrPage[] }) {
    if (Array.isArray(article)) article = article[0];
    return (
            <a href={article.url} className="flex flex-col gap-4 items-center py-4 text-black hover:text-black/60 transition duration-500">
                <h2 className="font-serif text-3xl font-medium italic">{article.title}</h2>
                {article.feature_image && <img className="max-h-96 border-2 shadow-lg" src={optimizeGhostImageUrl(article.feature_image, 'w1600')} />}
                <p className="font-serif text-xl text-center max-w-prose">{article.excerpt}</p>
            </a>
    );
}
