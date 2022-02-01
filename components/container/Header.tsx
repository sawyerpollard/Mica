import NavbarLinks from '../../lib/NavbarLinks';
import SocialLinks from '../../lib/SocialLinks';

import { OpenWeatherInfo } from '../OpenWeatherInfo';

import { SocialIcon } from 'react-social-icons';

import Navbar from './Navbar';
import Topbar from './Topbar';

export default function Header() {
    return (
        <>
            <header>
                <Topbar />
                <section className="flex justify-between items-start">
                    <div>
                        <SocialIcons urls={SocialLinks} />
                    </div>
                    <div className="flex flex-col items-center my-5">
                        <h1 className="text-4xl md:text-7xl lg:text-8xl whitespace-nowrap font-logo">
                            The Amherst Student
                        </h1>
                        <p className="hidden font-light italic md:inline">
                            {naturalDateString(new Date())} • {issueString(151, 13)}
                        </p>
                    </div>
                    <div className="px-3 py-0.5">
                        <OpenWeatherInfo cityId={4929023} />
                    </div>
                </section>
            </header>
            <div className="sticky z-50 top-0 mb-6">
                <Navbar navbarLinks={NavbarLinks} />
            </div>
        </>
    );
}

function issueString(volume: number, issue: number): string {
    return `Volume ${volume}, Issue ${issue}`;
}

function SocialIcons({ urls }: { urls: string[] }) {
    return (
        <div className="flex">
            {urls.map((url) => (
                <SocialIcon
                    key={url}
                    style={{ height: 40, width: 40 }}
                    fgColor="black"
                    bgColor="transparent"
                    url={url}
                />
            ))}
        </div>
    );
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
