import NavbarLinks from '../../lib/NavbarLinks';

import { OpenWeatherInfo } from '../OpenWeatherInfo';

import Navbar from './Navbar';
import Topbar from './Topbar';
import NavMenu from './NavMenu';

export default function Header() {
    return (
        <>
            <header className="bg-white/90 text-mammoth-800 backdrop-blur-sm sticky top-0 md:top-auto md:block border-double border-b-4 border-mammoth-800 z-40 shadow-md mb-6 whitespace-nowrap">
                <Topbar />
                <div className="hidden md:block sticky z-50 top-0">
                    <Navbar navbarLinks={NavbarLinks} />
                </div>
                <section className="flex md:justify-around">
                    <div className="hidden lg:flex items-center justify-center">
                        <p className="hidden uppercase font-bold md:inline">
                            {issueString(151, 15)}
                        </p>
                    </div>
                    <div className="flex flex-col items-center my-6">
                            <a href={process.env.GHOST_URL}>
                                <h1 className="text-3xl px-4 md:text-7xl whitespace-nowrap font-logo">
                                    The Amherst Student
                                </h1>
                            </a>
                    </div>
                    <div className="hidden lg:flex items-center justify-center">
                    <p className="hidden uppercase font-bold md:inline">
                        {naturalDateString(new Date())}
                    </p>
                    </div>
                </section>
                <div className="hidden md:block border-t-2 border-mammoth-800">
                    <div className="container mx-auto flex justify-between items-center">
                        <p className="font-serif font-medium italic">The Newspaper of Amherst College Since 1868</p>
                        <OpenWeatherInfo cityId={4929023} />
                    </div>
                </div>
            </header>
            <NavMenu navbarLinks={NavbarLinks} />
        </>
    );
}

function issueString(volume: number, issue: number): string {
    return `Volume ${volume} • Issue ${issue}`;
}

function naturalDateString(date: Date): string {
    const [weekDay, month, day, year] = [date.getDay(), date.getMonth(), date.getDate(), date.getFullYear()];

    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const dayName = dayNames[weekDay];
    const monthName = monthNames[month];

    const dateString = dayName + ', ' + monthName + ' ' + day + ', ' + year;

    return dateString;
}
