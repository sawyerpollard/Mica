import Link from 'next/link';

import { Author } from '@tryghost/content-api';

export default function AuthorLink({ authors }: { authors: Author[] }) {
    const authorLinks = authors.map((author, index) => (
        <span key={index} className="text-purple-900 hover:text-black">
            <Link href={`/author/${author.slug}`}>{author.name}</Link>
        </span>
    ));

    return (
        <p className="font-sans uppercase font-semibold text-xs inline">{['By ', ...naturalListJoin(authorLinks)]}</p>
    );
}

function naturalListJoin(array: any[]) {
    const seperator = ', ';
    const finalSeperator = ', and ';
    const conjunction = ' and ';

    let list = [];

    if (array.length === 1) {
        list = array;
    } else if (array.length === 2) {
        list = [array[0], conjunction, array[1]];
    } else {
        array.forEach((item, index) => {
            list.push(item);
            if (index !== array.length - 1) {
                list.push(index === array.length - 2 ? finalSeperator : seperator);
            }
        });
    }

    return list;
}
