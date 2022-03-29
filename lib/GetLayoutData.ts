import { getGhostPosts, getGhostTag } from './GetGhost';

import { OneTwoOneData } from '../components/layout/OneTwoOneArticleLayout';
import { TwoOneData } from '../components/layout/TwoOneArticleLayout';
import { ArticleGridData } from '../components/layout/ArticleGridLayout';
import { ImageArticleData } from '../components/layout/ImageArticleLayout';

export async function getOneTwoOneData(
    leftTag: string,
    featuredTag: string,
    rightTag: string
): Promise<OneTwoOneData | undefined> {
    const leftArticles = await getGhostPosts({
        limit: 5,
        filter: `tag:${leftTag}+tag:-${featuredTag}`,
        include: 'authors',
    });
    const featuredArticles = await getGhostPosts({
        limit: 1,
        filter: `tag:${featuredTag}+feature_image:-null`,
        include: 'authors',
    });
    const rightArticles = await getGhostPosts({
        limit: 2,
        filter: `tag:${rightTag}+tag:-${featuredTag}+feature_image:-null`,
        include: 'authors',
    });

    if (!leftArticles || !featuredArticles || !rightArticles) {
        return undefined;
    }

    return {
        leftArticles,
        featuredArticle: featuredArticles[0],
        rightArticles,
    };
}

export async function getTwoOneData(leftTag: string, rightTag: string): Promise<TwoOneData | undefined> {
    const leftArticles = await getGhostPosts({
        limit: 2,
        filter: `tag:${leftTag}+feature_image:-null+tag:-hash-top-left+tag:-hash-top-right+tag:-hash-top-center`,
        include: 'authors',
    });
    const leftHeading = (await getGhostTag({ slug: leftTag }))?.name;

    const rightArticles = await getGhostPosts({ limit: 4, filter: `tag:${rightTag}`, include: 'authors' });
    const rightHeading = (await getGhostTag({ slug: rightTag }))?.name;

    if (!leftArticles || !leftHeading || !rightArticles || !rightHeading) {
        return undefined;
    }

    return {
        leftArticles,
        leftHeading,
        rightArticles,
        rightHeading,
    };
}

export async function getArticleGridData(tag: string, limit: number): Promise<ArticleGridData | undefined> {
    const articles = await getGhostPosts({ limit, filter: `tag:${tag}+tag:-hash-top-left+tag:-hash-top-right+tag:-hash-top-center`, include: 'authors' });
    const heading = (await getGhostTag({ slug: tag }))?.name;

    if (!articles || !heading) {
        return undefined;
    }

    return {
        articles,
        heading,
    };
}

export async function getImageArticleData(tag: string, limit: number): Promise<ImageArticleData | undefined> {
    const articles = await getGhostPosts({ limit, filter: `tag:${tag}+feature_image:-null+tag:-hash-top-left+tag:-hash-top-right+tag:-hash-top-center`, include: 'authors' });
    const heading = (await getGhostTag({ slug: tag }))?.name;

    if (!articles || !heading) {
        return undefined;
    }

    return {
        articles,
        heading,
    };
}
