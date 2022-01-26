module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            serif: ['EB Garamond', 'serif'],
            logo: ['old-english-text-mt-regular', 'serif'],
        },
        extend: {
            aspectRatio: {
                '3/2': '3 / 2',
            },
        },
    },
    plugins: [],
};
