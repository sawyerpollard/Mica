import { PostOrPage } from '@tryghost/content-api';

import { ArticleInfo } from './ArticleInfo';

export default function FeaturedArticle({ article }: { article: PostOrPage }) {
    return (
        <a href={article.url} className="text-center text-black hover:text-black/60 transition duration-500">
            {article.feature_image && <img className="mb-4 aspect-video object-cover w-full" src={article.feature_image} />}
            <h2 className="font-serif text-3xl font-medium mb-4">{article.title}</h2>
            <p className="font-serif text-xl">{article.excerpt}</p>
            <ArticleInfo article={article} showDate />
        </a>
    );
}
