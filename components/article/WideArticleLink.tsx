import { PostOrPage } from '@tryghost/content-api';

import { optimizeGhostImageUrl } from '../../lib/GhostTools';

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
        <div className="flex flex-col-reverse sm:flex-row align-between space-between justify-between gap-6 text-black hover:text-black/60 transition duration-500">
            <div className="flex flex-col gap-4">
                <a href={article.url}><h2 className="font-serif text-3xl">{article.title}</h2></a>
                <ArticleInfo article={article} showDate={showDate} />
                <a href={article.url}><p className="font-serif text-lg hidden sm:block">{article.excerpt}</p></a>
            </div>
            {showImage && article.feature_image && (
                <img className="h-52 aspect-square object-cover" src={optimizeGhostImageUrl(article.feature_image, 'w720')} />
            )}
        </div>
    );
}
