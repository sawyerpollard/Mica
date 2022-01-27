export type NavbarLink = {
    name: string;
    url: string;
    subLinks?: NavbarLink[];
};

export default [
    {
        name: 'News',
        url: process.env.GHOST_URL + '/section/news',
        subLinks: [
            {
                name: 'Students',
                url: process.env.GHOST_URL + '/section/student-news',
            },
            {
                name: 'Administration',
                url: process.env.GHOST_URL + '/section/administration',
            },
            {
                name: 'Covid-19',
                url: process.env.GHOST_URL + '/section/covid',
            },
            {
                name: 'Police Log',
                url: process.env.GHOST_URL + '/section/police-log',
            },
        ],
    },
    {
        name: 'Opinion',
        url: process.env.GHOST_URL + '/section/opinion',
        subLinks: [
            {
                name: 'Editorials',
                url: process.env.GHOST_URL + '/section/editorial',
            },
            {
                name: 'Columns',
                url: process.env.GHOST_URL + '/section/columns',
            },
            {
                name: 'Op-Eds',
                url: process.env.GHOST_URL + '/section/op-ed',
            },
            {
                name: 'Letters to the Editor',
                url: process.env.GHOST_URL + '/section/letters-to-the-editor',
            },
        ],
    },
    {
        name: 'Arts and Living',
        url: process.env.GHOST_URL + '/section/arts-and-living',
        subLinks: [
            {
                name: 'Campus Life',
                url: process.env.GHOST_URL + '/section/campus-life',
            },
            {
                name: 'Film and TV',
                url: process.env.GHOST_URL + '/section/film-and-tv',
            },
            {
                name: 'Music',
                url: process.env.GHOST_URL + '/section/music',
            },
            {
                name: 'Books',
                url: process.env.GHOST_URL + '/section/books',
            },
            {
                name: 'Theater',
                url: process.env.GHOST_URL + '/section/theater',
            },
        ],
    },
    {
        name: 'Sports',
        url: process.env.GHOST_URL + '/section/sports',
        subLinks: [
            {
                name: 'Fall',
                url: process.env.GHOST_URL + '/section/fall-sports',
            },
            {
                name: 'Winter',
                url: process.env.GHOST_URL + '/section/winter-sports',
            },
            {
                name: 'Spring',
                url: process.env.GHOST_URL + '/section/spring-sports',
            },
        ],
    },
    {
        name: 'Podcasts',
        url: process.env.GHOST_URL + '/section/podcast',
        subLinks: [
            {
                name: 'Tusk Talks',
                url: process.env.GHOST_URL + '/section/tusk-talks',
            },
            {
                name: 'The Student Sums It Up',
                url: process.env.GHOST_URL + '/section/the-student-sums-it-up',
            },
            {
                name: 'Terras Irradient',
                url: process.env.GHOST_URL + '/section/terras-irradient',
            },
        ],
    },
    {
        name: 'Amusements',
        url: process.env.GHOST_URL + '/amusements',
        subLinks: [
            {
                name: 'Crossword',
                url: process.env.GHOST_URL + '/section/crossword',
            },
            {
                name: 'Cartoons',
                url: process.env.GHOST_URL + '/section/cartoon',
            },
            {
                name: 'Satire',
                url: process.env.GHOST_URL + '/section/satire',
            },
        ],
    },
    {
        name: 'More',
        url: process.env.GHOST_URL + '/',
        subLinks: [
            {
                name: 'About',
                url: process.env.GHOST_URL + '/about',
            },
            {
                name: 'Contribute',
                url: process.env.GHOST_URL + '/contribute',
            },
            {
                name: 'Donate',
                url: process.env.GHOST_URL + '/donate',
            },
        ],
    },
];
