import { PostOrPage, FilterParam } from '@tryghost/content-api';
import { getGhostPosts } from './GetGhost';

export type Source = PostOrPage[];

export default class Sourcer {
    baseFilter?: FilterParam;
    history: string[];
    requestLimit: number = 10;

    constructor(baseFilter?: FilterParam) {
        this.baseFilter = baseFilter;
        this.history = [];
    }

    async get(filter: FilterParam, limit: number): Promise<Source> {
        let results: Source = [];

        const mergedFilter = [filter, this.baseFilter].filter(item => item).join('+');

        let maxPage = 1;
        let page = 1;
        while (results.length != limit && page <= maxPage) {
            const posts = await getGhostPosts({ page, filter: mergedFilter, limit, include: 'authors' });
            if (maxPage === 1) maxPage = posts.meta.pagination.pages;

            const uniquePosts = posts.filter((post) => !this.history.includes(post.slug));

            results = concatWithLimit(results, uniquePosts, limit);
            this.history = this.history.concat(results.map((post) => post.slug));

            page++;
        }

        return results;
    }
}

function concatWithLimit(a: any[], b: any[], limit: number): any[] {
    return a.concat(b).slice(0, limit);
}
