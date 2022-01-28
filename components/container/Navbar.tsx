import { NavbarLink } from '../../lib/NavbarLinks';

export default function Navbar({ navbarLinks }: { navbarLinks: NavbarLink[] }) {
    const items = navbarLinks.map((navbarLink) => <NavLink key={navbarLink.url} navbarLink={navbarLink} />);
    return (
        <nav className="flex justify-center border-t-2 border-b-4 w-full backdrop-blur-sm bg-white/90 border-black whitespace-nowrap">
            {items}
        </nav>
    );
}

function NavLink({ navbarLink }: { navbarLink: NavbarLink }) {
    const subItems = navbarLink.subLinks?.map((subLink) => (
        <li key={subLink.url} className="first:border-t-4 first:border-black border-t border-black/60">
            <a
                className="block p-4 tracking-wider transition font-medium whitespace-nowrap hover:text-purple-900"
                href={subLink.url}
            >
                {subLink.name}
            </a>
        </li>
    ));

    return (
        <div className="group inline-block">
            <a
                className="block px-6 py-2 uppercase transition font-bold text-md hover:text-purple-900"
                href={navbarLink.url}
            >
                {navbarLink.name}
            </a>
            {subItems && (
                <ul className="drop-shadow-lg backdrop-blur-sm rounded-bl rounded-br bg-white/90 w-80 absolute hidden group-hover:block">
                    {subItems}
                </ul>
            )}
        </div>
    );
}
