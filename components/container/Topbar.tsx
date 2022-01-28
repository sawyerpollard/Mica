import { OpenWeatherInfo } from '../OpenWeatherInfo';

import TopbarLinks from '../../lib/TopbarLinks';

export default function Topbar() {
    const items = TopbarLinks.map((topbarLink) => (
        <a key={topbarLink.url} className="p-2 hover:text-purple-900 transition" href={topbarLink.url}>
            {topbarLink.name}
        </a>
    ));
    return (
        <section className="hidden md:flex justify-between items-center bg-gray-100 drop-shadow text-gray-500 text-light text-sm">
            <div>{items}</div>
            <div className="px-2 h-8">
                <OpenWeatherInfo cityId={4929023} />
            </div>
        </section>
    );
}
