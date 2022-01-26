import Image from 'next/image';

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
                <div className='mb-4 relative aspect-video'>
                    <Image layout='fill' objectFit='cover' src={article.feature_image} />
                </div>
            )}
            <h2 className='font-serif text-2xl font-medium'>{article.title}</h2>
            {article.authors && <AuthorLink authors={article.authors} />}
        </a>
    );
}
