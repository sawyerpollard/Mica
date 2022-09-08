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
                name: 'Covid-19',
                url: process.env.GHOST_URL + '/section/covid',
            },
            {
                name: 'College',
                url: process.env.GHOST_URL + '/section/college',
            },
            {
                name: 'Town',
                url: process.env.GHOST_URL + '/section/town',
            },
        ],
    },
    {
        name: 'Features',
        url: process.env.GHOST_URL + '/section/features',
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
        name: 'Arts & Living',
        url: process.env.GHOST_URL + '/section/arts-and-living',
        subLinks: [
            {
                name: 'Campus',
                url: process.env.GHOST_URL + '/section/campus-life',
            },
            {
                name: 'Film & TV',
                url: process.env.GHOST_URL + '/section/film-and-tv',
            },
            {
                name: 'Music',
                url: process.env.GHOST_URL + '/section/music',
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
                name: 'The Student Sums It Up',
                url: process.env.GHOST_URL + '/section/the-student-sums-it-up',
            },
            {
                name: 'Tusk Talks',
                url: process.env.GHOST_URL + '/section/tusk-talks',
            },
            {
                name: 'Terras Irradient',
                url: process.env.GHOST_URL + '/section/terras-irradient',
            },
        ],
    },
    {
        name: 'Search',
        url: process.env.GHOST_URL + '/search',
    },
];
