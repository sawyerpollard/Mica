import Link from 'next/link';

import NavMenu from './NavMenu';

import { NavbarLink } from '../../lib/NavbarLinks';

import MenuLinks from '../../lib/MenuLinks';

export default function Navbar({ navbarLinks }: { navbarLinks: NavbarLink[] }) {
    const items = navbarLinks.map((navbarLink) => <NavLink key={navbarLink.url} navbarLink={navbarLink} />);
    return (
        <nav className="w-full backdrop-blur-sm text-white bg-black/90 whitespace-nowrap h-12 px-4">
            <div className="h-full container mx-auto flex justify-between md:justify-around items-center">
                <NavMenu navbarLinks={MenuLinks} />
                {items}
                <h1 className="text-3xl md:hidden whitespace-nowrap font-logo">
                    <Link href="/">The Amherst Student</Link>
                </h1>
            </div>
        </nav>
    );
}

function NavLink({ navbarLink }: { navbarLink: NavbarLink }) {
    return (
            <a
                className="hidden md:flex items-center justify-center px-2 lg:px-6 h-full transition text-sm hover:text-white/80"
                href={navbarLink.url}
            >
                {navbarLink.name}
            </a>
    );
}
