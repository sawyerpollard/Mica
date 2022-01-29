import NavbarLinks from '../../lib/NavbarLinks';

import Navbar from './Navbar';
import Topbar from './Topbar';

export default function Header() {
    return (
        <>
            <header>
                <Topbar />
                <div className="flex flex-col items-center my-5">
                    <h1 className="text-4xl md:text-7xl lg:text-8xl whitespace-nowrap font-logo">
                        The Amherst Student
                    </h1>
                    <p className="hidden font-medium md:inline">{naturalDateString(new Date())}</p>
                </div>
            </header>
            <div className="sticky z-50 top-0 mb-6">
                <Navbar navbarLinks={NavbarLinks} />
            </div>
        </>
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
