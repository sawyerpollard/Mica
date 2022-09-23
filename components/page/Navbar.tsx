import Link from 'next/link';

import Config from '../../lib/Config';

import NavMenu from './NavMenu';

type NavbarLink = {
    name: string;
    url: string;
    subLinks?: NavbarLink[];
};

export default function Navbar({ navbarLinks }: { navbarLinks: NavbarLink[] }) {
    const items = navbarLinks.map((navbarLink) => <NavLink key={navbarLink.url} navbarLink={navbarLink} />);
    return (
        <nav className="w-full backdrop-blur-sm text-white bg-black/90 whitespace-nowrap h-12 px-4">
            <div className="h-full container mx-auto flex justify-between md:justify-around items-center">
                <NavMenu navbarLinks={Config.menuLinks} />
                {items}
                <h1 className="text-3xl md:hidden whitespace-nowrap font-logo">
                    <Link href="/">{Config.meta.title}</Link>
                </h1>
            </div>
        </nav>
    );
}

function NavLink({ navbarLink }: { navbarLink: NavbarLink }) {
    return (
            <span
                className="hidden md:flex items-center justify-center px-2 lg:px-6 h-full transition text-sm hover:text-white/80"
            >
                <Link href={navbarLink.url}>{navbarLink.name}</Link>
            </span>
    );
}
