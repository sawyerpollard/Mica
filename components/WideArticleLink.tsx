import { PostOrPage } from '@tryghost/content-api';

import { optimizeGhostImageUrl } from '../lib/GhostTools';

import { ArticleInfo } from './ArticleInfo';

export default function WideArticleLink({
    article,
    showImage,
    showDate,
}: {
    article: PostOrPage;
    showImage?: boolean;
    showDate?: boolean;
}) {
    return (
        <a
            className="flex flex-col-reverse sm:flex-row justify-between gap-6 text-black hover:text-black/60 transition duration-500"
            href={article.url}
        >
            <div>
                <h2 className="font-serif text-2xl font-medium">{article.title}</h2>
                <ArticleInfo article={article} showDate={showDate} />
                <p className="mt-4 font-serif text-lg hidden sm:block">{article.excerpt}</p>
            </div>
            {showImage && article.feature_image && (
                <img className="h-52 aspect-square object-cover" src={optimizeGhostImageUrl(article.feature_image, 'w720')} />
            )}
        </a>
    );
}
