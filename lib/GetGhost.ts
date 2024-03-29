import GhostContentAPI, { Params, Tag, Author, PostsOrPages } from '@tryghost/content-api';

const api = new GhostContentAPI({
    url: process.env.GHOST_API_URL as string,
    key: process.env.GHOST_CONTENT_API_KEY as string,
    version: 'v5.0',
});

export async function getGhostPosts(options?: Params): Promise<PostsOrPages> {
    const posts = await api.posts.browse(options);
    return posts;
}

export async function getGhostTag(options?: any): Promise<void | Tag> {
    try {
        const tag = await api.tags.read(options);
        return tag;
    } catch (err) {
        console.error(err);
    }
}

export async function getGhostTags(options?: any): Promise<void | Tag[]> {
    try {
        const tags = await api.tags.browse(options);
        return tags;
    } catch (err) {
        console.error(err);
    }
}

export async function getGhostAuthor(options?: any): Promise<void | Author> {
    try {
        const author = await api.authors.read(options);
        return author;
    } catch (err) {
        console.error(err);
    }
}

export async function getGhostAuthors(options?: any): Promise<void | Author[]> {
    try {
        const authors = await api.authors.browse(options);
        return authors;
    } catch (err) {
        console.error(err);
    }
}
