import { PostOrPage } from '@tryghost/content-api';

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
            className="flex flex-row justify-between gap-x-6 text-black hover:text-black/60 transition duration-500"
            href={article.url}
        >
            <div>
                <h2 className="font-serif text-2xl font-medium">{article.title}</h2>
                <ArticleInfo article={article} showDate={showDate} />
                <p className="mt-4 font-serif text-lg hidden lg:block">{article.excerpt}</p>
            </div>
            {showImage && article.feature_image && (
                <img className="h-40 aspect-square object-cover" src={article.feature_image} />
            )}
        </a>
    );
}
