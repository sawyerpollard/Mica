import { useState } from 'react';

import Config from '../../lib/Config';

import InfoLinkBox from '../info/InfoLinkBox';

type MenuLink = {
    name: string;
    url: string;
    subLinks?: MenuLink[];
};

export default function NavMenu({ navbarLinks }: { navbarLinks: MenuLink[] }) {
    const [isOpen, setOpen] = useState(false);
    const items = navbarLinks.map((navbarLink) => {
        const subItems = navbarLink.subLinks?.map((subLink) => <SecondaryLink key={subLink.url} link={subLink} />);
        return (
            <div className="flex flex-col gap-y-2" key={navbarLink.url}>
                <PrimaryLink  link={navbarLink} />
                {subItems}
            </div>
        );
    });

    return (
        <>
            <button onClick={() => setOpen(!isOpen)} className="z-50">
                <div className="space-y-2">
                    <div className="w-8 h-0.5 bg-white rounded-sm"></div>
                    <div className="w-8 h-0.5 bg-white rounded-sm"></div>
                    <div className="w-8 h-0.5 bg-white rounded-sm"></div>
                </div>
            </button>
            <div
                className={`w-full p-4 sm:w-96 overflow-scroll overscroll-contain bg-black/80 text-white shadow-md absolute mt-12 pb-12 top-0 bottom-0 left-0 h-screen z-40 transition ${
                    isOpen ? '' : '-translate-x-full'
                }`}
            >
                <div className="flex flex-col justify-between gap-y-10">
                    <div className="flex flex-col gap-y-6">{items}</div>
                    <InfoLinkBox links={[...Config.infoLinks.primary, ...Config.infoLinks.secondary]} />
                </div>
            </div>
        </>
    );
}

function PrimaryLink({ link }: { link: MenuLink }) {
    return (
        <a className="block uppercase transition hover:opacity-80 font-bold text-5xl" href={link.url}>
            {link.name}
        </a>
    );
}

function SecondaryLink({ link }: { link: MenuLink }) {
    return (
        <a className="block text-2xl tracking-wider transition hover:opacity-80 whitespace-nowrap" href={link.url}>
            {link.name}
        </a>
    );
}
