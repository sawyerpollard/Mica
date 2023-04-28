import Link from 'next/link';

import Config from '../../lib/Config';

import { OpenWeatherInfo } from '../info/OpenWeatherInfo';

import Navbar from './Navbar';

export default function Header() {
    return (
        <>
            <div className="sticky z-50 top-0">
                <Navbar navbarLinks={Config.navbarLinks} />
            </div>
            <header className="bg-white/90 backdrop-blur-sm sticky top-0 md:top-auto md:block md:border-b-4 border-black/90 z-40 shadow-md whitespace-nowrap">
                <section className="flex md:justify-around">
                    <div className="hidden lg:flex items-center justify-center">
                        <p className="hidden uppercase font-bold md:inline">
                            {issueString(152, 24)}
                        </p>
                    </div>
                    <div className="hidden md:flex flex-col items-center my-6">
                        <h1 className="text-3xl px-4 md:text-6xl whitespace-nowrap font-logo">
                            <Link href="/">{Config.meta.title}</Link>
                        </h1>
                        <p className="hidden lg:inline font-serif font-medium italic">{Config.meta.tagline}</p>
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
