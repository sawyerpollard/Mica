import { PostOrPage } from '@tryghost/content-api';

export default function PublishDate({ article }: { article: PostOrPage }) {
    if (!article.published_at) return null;
    const date = new Date(article.published_at);

    return <p className="font-sans font-semibold text-xs text-black/60 inline">{naturalDateString(date)}</p>;
}

export function naturalDateString(date: Date): string {
    const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];

    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const monthName = monthNames[month];

    const dateString = monthName + ' ' + day + ', ' + year;

    return dateString;
}
