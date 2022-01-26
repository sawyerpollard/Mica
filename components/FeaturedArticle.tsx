import Image from 'next/image';

import { PostOrPage } from '@tryghost/content-api';

import AuthorLink from './AuthorLink';

export default function FeaturedArticle({ article }: { article: PostOrPage }) {
    return (
        <a href={article.url} className='text-center text-black hover:text-black/60 transition duration-500'>
            {article.feature_image && (
                <div className='mb-4 relative aspect-3/2'>
                    <Image layout='fill' objectFit='cover' src={article.feature_image} />
                </div>
            )}
            <h2 className='font-serif text-3xl font-medium mb-4'>{article.title}</h2>
            <p className='font-serif text-xl'>{article.excerpt}</p>
            {article.authors && <AuthorLink authors={article.authors} />}
        </a>
    );
}
