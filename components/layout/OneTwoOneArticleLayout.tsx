import { PostsOrPages, PostOrPage } from '@tryghost/content-api';

import FeaturedArticle from '../FeaturedArticle';
import ArticleList from '../ArticleList';

export type OneTwoOneData = {
    leftArticles: PostsOrPages;
    featuredArticle: PostOrPage;
    rightArticles: PostsOrPages;
};

export type OneTwoOneArticleLayoutProps = {
    leftArticles: PostsOrPages;
    featuredArticle: PostOrPage;
    rightArticles: PostsOrPages;
    children: React.ReactNode;
};

export default function OneTwoOneArticleLayout(props: OneTwoOneArticleLayoutProps) {
    return (
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 py-6">
            <div className="md:col-span-2">
                <FeaturedArticle article={props.featuredArticle} />
            </div>
            <div className="flex flex-col justify-between lg:order-first">
                <ArticleList articles={props.leftArticles} showInfo={false} />
                {props.children}
            </div>
            <div>
                <ArticleList articles={props.rightArticles} showImages showInfo={false} />
            </div>
        </div>
    );
}
