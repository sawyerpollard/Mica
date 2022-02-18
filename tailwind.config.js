module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            serif: ['EB Garamond', 'serif'],
            logo: ['old-english-text-mt-regular', 'serif'],
            sans: ['Karla', 'sans']
        },
        extend: {
            aspectRatio: {
                '3/2': '3 / 2',
            },
            colors: {
                mammoth: {
                    500: '#b7a5d3',
                    600: '#856cb0',
                    700: '#5d3c85',
                    800: '#3f1f69',
                    900: '#311a4d',
                },
                primary: '3F1F69'
            },
        },
    },
    plugins: [],
};
