import { PostOrPage } from '@tryghost/content-api';

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
        <a className="block text-black hover:text-black/60 transition duration-500" href={article.url}>
            {showImage && article.feature_image && (
                <img className="mb-4 aspect-video object-cover w-full" src={article.feature_image} />
            )}
            <h2 className="font-serif text-xl font-medium">{article.title}</h2>
            {showInfo && <ArticleInfo article={article} showDate={showDate} />}
        </a>
    );
}
