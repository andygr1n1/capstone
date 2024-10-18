/** @type {import('tailwindcss').Config} */
import defaultConfig from 'tailwindcss/stubs/config.full'
const projectPaths = [
    './capstone/templates/**/*.html',
    './frontend/src/**/*.js',
    './frontend/src/**/*.tsx',
    './frontend/src/**/*.jsx',
]

const contentPaths = [...projectPaths]
// console.info(`tailwindcss will scan ${contentPaths}`)

module.exports = {
    content: contentPaths,
    theme: {
        fontFamily: {
            kaushan: ['Kaushan Script', defaultConfig.theme.fontFamily.sans],
        },
        extend: {
            animation: {
                'bounce-slow': 'bounce 8s ease-in-out infinite',
            },
            keyframes: {
                bounce: {
                    '0%, 100%': { transform: 'translateY(-25%)', easing: 'ease-in-out' },
                    '50%': { transform: 'translateY(0)', easing: 'ease-in-out' },
                },
            },
        },
    },
    plugins: [],
}
