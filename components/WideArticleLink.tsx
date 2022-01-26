import Image from 'next/image';

import { PostOrPage } from '@tryghost/content-api';

import AuthorLink from './AuthorLink';

export default function WideArticleLink({
    article,
    showImage
}: {
    article: PostOrPage,
    showImage?: boolean
}) {
    return (
        <a className='flex flex-row justify-between gap-x-6 text-black hover:text-black/60 transition duration-500' href={article.url}>
            <div>
                <h2 className='font-serif text-2xl font-medium'>{article.title}</h2>
                {article.authors && <AuthorLink authors={article.authors} />}
                <p className='mt-4 font-serif text-lg hidden lg:block'>{article.excerpt}</p>
            </div>
            {showImage && article.feature_image && (
                <div className='relative aspect-square h-40'>
                    <Image layout='fill' objectFit='cover' src={article.feature_image} />
                </div>
            )}
        </a>
    );
}
