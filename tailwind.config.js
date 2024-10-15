/** @type {import('tailwindcss').Config} */
import defaultConfig from 'tailwindcss/stubs/config.full'
const projectPaths = [
    './capstone/templates/**/*.html',
    './frontend/src/**/*.js',
    './frontend/src/**/*.tsx',
    './frontend/src/**/*.jsx',
]

const contentPaths = [...projectPaths]
console.log(`tailwindcss will scan ${contentPaths}`)

module.exports = {
    content: contentPaths,
    theme: {
        fontFamily: {
            kaushan: ['Kaushan Script', defaultConfig.theme.fontFamily.sans],
        },
        extend: {},
    },
    plugins: [],
}
