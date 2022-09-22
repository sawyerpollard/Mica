export type MenuLink = {
    name: string;
    url: string;
    subLinks?: MenuLink[];
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
        name: 'Amusements',
        url: '/amusements',
        subLinks: [
            {
                name: 'Crossword',
                url: '/section/crossword',
            },
            {
                name: 'Cartoons',
                url: '/section/cartoon',
            },
            {
                name: 'Satire',
                url: '/section/satire',
            },
        ],
    },
    {
        name: 'Submit',
        url: '/submit-a-tip',
        subLinks: [
            {
                name: 'Letter to the Editor',
                url: '/submit-a-letter',
            },
            {
                name: 'News Tip',
                url: '/submit-a-tip',
            },
            {
                name: 'Op-Ed',
                url: '/submit-an-op-ed',
            },
            {
                name: 'Art or Essay',
                url: '/submit-art-or-essay',
            },
        ],
    },
    {
        name: 'About',
        url: '/about',
        subLinks: [
            {
                name: 'Masthead',
                url: '/masthead',
            },
            {
                name: 'Join Our Staff',
                url: '/join-our-staff',
            },
            {
                name: 'Contact',
                url: '/contact',
            },
        ],
    },
];
