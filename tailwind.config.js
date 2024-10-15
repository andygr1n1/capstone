/** @type {import('tailwindcss').Config} */

const projectPaths = ['./capstone/templates/**/*.html', './frontend/src/**/*.js', './frontend/src/**/*.tsx', './frontend/src/**/*.jsx']

const contentPaths = [...projectPaths]
console.log(`tailwindcss will scan ${contentPaths}`)

module.exports = {
    content: contentPaths,
    theme: {
        extend: {},
    },
    plugins: [],
}
