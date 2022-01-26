import { PostOrPage } from '@tryghost/content-api';

import AuthorLink from './AuthorLink';

export default function ArticleLink({
    article,
    showImage
}: {
    article: PostOrPage,
    showImage?: boolean
}) {
    return (
        <a className='block text-black hover:text-black/60 transition duration-500' href={article.url}>
            {showImage && article.feature_image && (
                <img className='mb-4 aspect-video object-cover' src={article.feature_image} />
            )}
            <h2 className='font-serif text-2xl font-medium'>{article.title}</h2>
            {article.authors && <AuthorLink authors={article.authors} />}
        </a>
    );
}
