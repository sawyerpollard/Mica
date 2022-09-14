import NavbarLinks from '../../lib/NavbarLinks';

import { OpenWeatherInfo } from '../OpenWeatherInfo';

import Navbar from './Navbar';

export default function Header() {
    return (
        <>
            <div className="sticky z-50 top-0">
                <Navbar navbarLinks={NavbarLinks} />
            </div>
            <header className="bg-white/90 backdrop-blur-sm sticky top-0 md:top-auto md:block md:border-b-4 border-black/90 z-40 shadow-md whitespace-nowrap">
                <section className="flex md:justify-around">
                    <div className="hidden lg:flex items-center justify-center">
                        <p className="hidden uppercase font-bold md:inline">
                            {issueString(152, 1)}
                        </p>
                    </div>
                    <div className="hidden md:flex flex-col items-center my-6">
                        <a href={process.env.GHOST_URL}>
                            <h1 className="text-3xl px-4 md:text-6xl whitespace-nowrap font-logo">
                                The Amherst Student
                            </h1>
                        </a>
                        <p className="hidden lg:inline font-serif font-medium italic">The Newspaper of Amherst College Since 1868</p>
                    </div>
                    <div className="hidden lg:flex flex-col items-center justify-center font-medium">
                    <OpenWeatherInfo cityId={4929023} />

                    <p className="hidden uppercase font-bold md:inline">
                        {naturalDateString(new Date())}
                    </p>
                    </div>
                </section>
            </header>
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
