import { PostsOrPages } from '@tryghost/content-api';

import ArticleList from '../ArticleList';
import WideArticleList from '../WideArticleList';

export type TwoOneData = {
    leftArticles: PostsOrPages;
    leftHeading?: string;
    rightArticles: PostsOrPages;
    rightHeading?: string;
};

export default function TwoOneArticleLayout({ leftArticles, leftHeading, rightArticles, rightHeading }: TwoOneData) {
    return (
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
            <div className="lg:col-span-2">
                {leftHeading && <h1 className="mb-8 font-serif font-medium text-5xl">{leftHeading}</h1>}
                <WideArticleList articles={leftArticles} showImages={true} />
            </div>
            <div className="lg:col-span-1">
                {rightHeading && <h1 className="mb-8 font-serif font-medium text-5xl">{rightHeading}</h1>}
                <ArticleList articles={rightArticles} showImages={false} />
            </div>
        </div>
    );
}
