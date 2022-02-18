import { NavbarLink } from '../../lib/NavbarLinks';

export default function Navbar({ navbarLinks }: { navbarLinks: NavbarLink[] }) {
    const items = navbarLinks.map((navbarLink) => <NavLink key={navbarLink.url} navbarLink={navbarLink} />);
    return (
        <nav className="shadow-lg w-full backdrop-blur-sm text-white bg-mammoth-800/90 whitespace-nowrap">
            <div className="container mx-auto flex justify-around items-center">
                {items}
            </div>
        </nav>
    );
}

function NavLink({ navbarLink }: { navbarLink: NavbarLink }) {
    const subItems = navbarLink.subLinks?.map((subLink) => (
        <li key={subLink.url} className="first:border-none border-t border-white/60">
            <a
                className="block p-4 tracking-wider transition font-medium whitespace-nowrap hover:bg-black/20"
                href={subLink.url}
            >
                {subLink.name}
            </a>
        </li>
    ));

    return (
        <div className="group inline-block">
            <a
                className="block px-2 lg:px-6 py-3 uppercase transition font-bold text-sm hover:bg-black/20"
                href={navbarLink.url}
            >
                {navbarLink.name}
            </a>
            {subItems && (
                <ul className="shadow-lg backdrop-blur-sm rounded-bl rounded-br w-60 bg-mammoth-800/90 absolute hidden group-hover:block">
                    {subItems}
                </ul>
            )}
        </div>
    );
}
