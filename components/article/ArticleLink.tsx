import { PostOrPage } from '@tryghost/content-api';

import { optimizeGhostImageUrl } from '../../lib/GhostTools';

import { ArticleInfo } from './ArticleInfo';

export default function ArticleLink({
    article,
    showImage,
    showDate,
    showInfo=true,
}: {
    article: PostOrPage;
    showImage?: boolean;
    showDate?: boolean;
    showInfo?: boolean;
}) {
    return (
        <div className="text-black hover:text-black/60 transition duration-500">
            <a href={article.url}>
                {showImage && article.feature_image && (
                    <img className="mb-4 aspect-video object-cover w-full" src={optimizeGhostImageUrl(article.feature_image, 'w720')} />
                )}
                <h2 className="font-serif text-xl font-medium">{article.title}</h2>
            </a>
            {showInfo && <ArticleInfo article={article} showDate={showDate} />}
        </div>
    );
}
