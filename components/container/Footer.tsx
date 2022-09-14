import { SocialIcon } from 'react-social-icons';

import InfoLinkBox from '../InfoLinkBox';
import DonateButton from '../DonateButton';

import CategoryLinks from '../../lib/FooterLinks';
import SocialLinks from '../../lib/SocialLinks';
import InfoLinks from '../../lib/InfoLinks';

export default function Footer() {
    return (
        <footer id="footer" className="text-white bg-mammoth-900 whitespace-nowrap">
            <section className="grid gap-x-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                <div className="flex flex-col justify-center gap-y-4 p-6 items-center row-span-3 overflow-hidden bg-black/40">
                    <p className="text-2xl font-logo">The Amherst Student</p>
                    <p className="font-serif">Established 1868</p>
                    <SocialIcons urls={SocialLinks} />
                    <DonateButton url={process.env.GHOST_URL + '/donate'} />
                    <a
                        className="mb-8 font-serif font-light text-blue-300 hover:text-blue-300/80 transition"
                        href="mailto:astudent@amherst.edu"
                    >
                        astudent@amherst.edu
                    </a>
                    <InfoLinkBox links={[...InfoLinks.primary, ...InfoLinks.secondary]} />
                </div>
                <FooterLinkList links={CategoryLinks.news} />
                <FooterLinkList links={CategoryLinks.opinion} />
                <FooterLinkList links={CategoryLinks.artsAndLiving} />
                <FooterLinkList links={CategoryLinks.sports} />
                <FooterLinkList links={CategoryLinks.podcasts} />
                <FooterLinkList links={CategoryLinks.amusements} />
            </section>
            <p className="text-xs font-serif font-light text-white/60 hidden tracking-wide text-center">
                © {new Date().getFullYear()} The Amherst Student. All Rights Reserved.
            </p>
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
                className="text-center md:text-left md:block first:block first:text-2xl first:font-semibold first:mb-2 first:uppercase first:tracking-wide font-light text-md hidden"
            >
                <a className="py-2 block hover:text-white/80 transition" href={link.url} key={link.url}>
                    {link.name}
                </a>
            </li>
        );
    });
    return <ul className="py-2 md:py-6">{items}</ul>;
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
