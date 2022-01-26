import { PostsOrPages, PostOrPage } from '@tryghost/content-api';

import FeaturedArticle from '../FeaturedArticle';
import ArticleList from '../ArticleList';

export type OneTwoOneData = {
    leftArticles: PostsOrPages,
    featuredArticle: PostOrPage,
    rightArticles: PostsOrPages
};

export default function OneTwoOneArticleLayout({
    leftArticles,
    featuredArticle,
    rightArticles
}: OneTwoOneData) {
    return (
        <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16'>
            <div className='md:col-span-2'>
                <FeaturedArticle article={featuredArticle} />
            </div>
            <div className='lg:order-first'>
                <ArticleList articles={leftArticles} showImages={false} />
            </div>
            <div>
                <ArticleList articles={rightArticles} showImages={true} />
            </div>
        </div>
    );
}
