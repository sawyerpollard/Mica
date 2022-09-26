import { PostOrPage } from '@tryghost/content-api';

import AuthorLink from './AuthorLink';
import PublishDate from './PublishDate';

export function ArticleInfo({ article, showDate }: { article: PostOrPage; showDate?: boolean }) {
    return (
        <div>
            {article.authors && <AuthorLink authors={article.authors} />}
            {showDate && article.published_at && [' • ', <PublishDate key={article.published_at} article={article} />]}
        </div>
    );
}
