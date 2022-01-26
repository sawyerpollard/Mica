import { SocialIcon } from 'react-social-icons';

import CategoryLinks from '../../lib/FooterLinks';

const socialUrls = [
    'https://www.instagram.com/amherststudent',
    'https://twitter.com/amherststudent',
    'https://www.facebook.com/AmherstStudent/',
];

export default function Footer() {
    return (
        <footer className="text-white bg-purple-900 px-16 py-4 mt-10 whitespace-nowrap">
            <section className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                <div className="flex flex-col justify-center gap-y-2 items-center row-span-3">
                    <p className="text-2xl font-logo">The Amherst Student</p>
                    <SocialIcons urls={socialUrls} />
                    <p className="text-sm font-light">© {new Date().getFullYear()} The Amherst Student</p>
                </div>
                <FooterLinkList links={CategoryLinks.news} />
                <FooterLinkList links={CategoryLinks.opinion} />
                <FooterLinkList links={CategoryLinks.artsAndLiving} />
                <FooterLinkList links={CategoryLinks.sports} />
                <FooterLinkList links={CategoryLinks.podcasts} />
                <FooterLinkList links={CategoryLinks.amusements} />
            </section>
        </footer>
    );
}

function FooterLinkList({
    links,
}: {
    links: {
        name: string;
        url: string;
    }[];
}) {
    const items = links.map((link) => {
        return (
            <li
                key={link.url}
                className="text-center md:text-left md:block first:block first:text-2xl first:font-semibold first:mb-2 first:font-serif font-light text-md hidden"
            >
                <a className="py-1 block hover:text-white/80 transition" href={link.url} key={link.url}>
                    {link.name}
                </a>
            </li>
        );
    });
    return <ul className="">{items}</ul>;
}

function SocialIcons({ urls }: { urls: string[] }) {
    return (
        <div className="flex gap-x-3">
            {urls.map((url) => (
                <SocialIcon
                    key={url}
                    style={{ height: 50, width: 50 }}
                    fgColor="white"
                    bgColor="transparent"
                    url={url}
                />
            ))}
        </div>
    );
}
