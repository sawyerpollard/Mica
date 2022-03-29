import { PostOrPage } from '@tryghost/content-api';

export default function LeadArticleLayout({ article }: { article: PostOrPage }) {
    return (
        <a className="block text-black hover:text-black/60 transition duration-500" href={article.url}>
            <h2 className="font-serif italic text-4xl font-semibold">{article.title}</h2>
        </a>
    );
}
