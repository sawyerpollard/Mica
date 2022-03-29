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
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-16 py-6">
            <div className="md:col-span-2">
                {leftHeading && <h1 className="mb-8 font-serif font-bold text-4xl">{leftHeading}</h1>}
                <WideArticleList articles={leftArticles} showImages showDate />
            </div>
            <div className="md:col-span-1">
                {rightHeading && <h1 className="mb-8 font-serif font-bold text-4xl">{rightHeading}</h1>}
                <ArticleList articles={rightArticles} showDate={false} />
            </div>
        </div>
    );
}
