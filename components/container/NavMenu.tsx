import { useState } from 'react';

import { NavbarLink } from '../../lib/NavbarLinks';

export default function NavMenu({ navbarLinks }: { navbarLinks: NavbarLink[] }) {
    const [isOpen, setOpen] = useState(false);
    const items = navbarLinks.map((navbarLink) => <NavMenuLink key={navbarLink.url} navbarLink={navbarLink} />);

    return (
        <>
            <button onClick={() => setOpen(!isOpen)} className="md:hidden p-7 fixed top-0 right-0 z-50">
                <div className="space-y-2">
                    <div className="w-8 h-0.5 bg-black"></div>
                    <div className="w-8 h-0.5 bg-black"></div>
                    <div className="w-8 h-0.5 bg-black"></div>
                </div>
            </button>
            <div
                className={`overflow-scroll overscroll-contain bg-white/90 backdrop-blur-sm md:hidden fixed top-0 bottom-0 h-full w-full z-40 ${
                    isOpen ? 'block' : 'hidden'
                }`}
            >
                {items}
            </div>
        </>
    );
}

function NavMenuLink({ navbarLink }: { navbarLink: NavbarLink }) {
    const subItems = navbarLink.subLinks?.map((subLink) => (
        <li key={subLink.url} className="">
            <a
                className="block text-xl px-6 py-4 tracking-wider transition font-medium whitespace-nowrap hover:text-purple-900"
                href={subLink.url}
            >
                {subLink.name}
            </a>
        </li>
    ));

    return (
        <div className="border-b-2 border-black">
            <a
                className="block px-6 py-4 uppercase transition font-bold text-3xl hover:text-purple-900"
                href={navbarLink.url}
            >
                {navbarLink.name}
            </a>
            {subItems && <ul>{subItems}</ul>}
        </div>
    );
}
