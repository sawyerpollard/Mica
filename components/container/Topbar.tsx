import { OpenWeatherInfo } from '../OpenWeatherInfo';

import TopbarLinks from '../../lib/TopbarLinks';

export default function Topbar() {
    const leftItems = TopbarLinks.left.map((topbarLink) => (
        <a
            key={topbarLink.url}
            className="inline-block px-2 py-0.5 hover:text-purple-900 transition"
            href={topbarLink.url}
        >
            {topbarLink.name}
        </a>
    ));

    const rightItems = TopbarLinks.right.map((topbarLink) => (
        <a
            key={topbarLink.url}
            className="inline-block px-2 py-0.5 hover:text-purple-900 transition"
            href={topbarLink.url}
        >
            {topbarLink.name}
        </a>
    ));

    return (
        <section className="hidden lg:flex justify-between items-center bg-white drop-shadow text-gray-400 text-light text-sm whitespace-nowrap">
            <div>{leftItems}</div>
            <div>{rightItems}</div>
        </section>
    );
}
