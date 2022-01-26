import GhostContentAPI, { Params, PostsOrPages, Tag } from '@tryghost/content-api';

const api = new GhostContentAPI({
    url: process.env.GHOST_API_URL as string,
    key: process.env.GHOST_CONTENT_API_KEY as string,
    version: 'v3',
});

export async function getGhostPosts(options?: Params): Promise<void | PostsOrPages> {
    try {
        const posts = await api.posts.browse(options);
        return posts;
    } catch (err) {
        console.error(err);
    }
}

export async function getGhostTag(options?: any): Promise<void | Tag> {
    try {
        const tag = await api.tags.read(options);
        return tag;
    } catch (err) {
        console.error(err);
    }
}
