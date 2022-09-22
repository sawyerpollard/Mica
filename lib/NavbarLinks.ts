export type NavbarLink = {
    name: string;
    url: string;
    subLinks?: NavbarLink[];
};

export default [
    {
        name: 'News',
        url: '/section/news',
        subLinks: [
            {
                name: 'Covid-19',
                url: '/section/covid',
            },
            {
                name: 'College',
                url: '/section/college',
            },
            {
                name: 'Town',
                url: '/section/town',
            },
        ],
    },
    {
        name: 'Features',
        url: '/section/features',
    },
    {
        name: 'Opinion',
        url: '/section/opinion',
        subLinks: [
            {
                name: 'Editorials',
                url: '/section/editorial',
            },
            {
                name: 'Columns',
                url: '/section/columns',
            },
            {
                name: 'Op-Eds',
                url: '/section/op-ed',
            },
            {
                name: 'Letters to the Editor',
                url: '/section/letters-to-the-editor',
            },
        ],
    },
    {
        name: 'Arts & Living',
        url: '/section/arts-and-living',
        subLinks: [
            {
                name: 'Campus',
                url: '/section/campus-life',
            },
            {
                name: 'Film & TV',
                url: '/section/film-and-tv',
            },
            {
                name: 'Music',
                url: '/section/music',
            },
            {
                name: 'Theater',
                url: '/section/theater',
            },
        ],
    },
    {
        name: 'Sports',
        url: '/section/sports',
        subLinks: [
            {
                name: 'Fall',
                url: '/section/fall-sports',
            },
            {
                name: 'Winter',
                url: '/section/winter-sports',
            },
            {
                name: 'Spring',
                url: '/section/spring-sports',
            },
        ],
    },
    {
        name: 'Podcasts',
        url: '/section/podcast',
        subLinks: [
            {
                name: 'The Student Sums It Up',
                url: '/section/the-student-sums-it-up',
            },
            {
                name: 'Tusk Talks',
                url: '/section/tusk-talks',
            },
            {
                name: 'Terras Irradient',
                url: '/section/terras-irradient',
            },
        ],
    },
    {
        name: 'Search',
        url: '/search',
    },
];
