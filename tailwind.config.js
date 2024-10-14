/** @type {import('tailwindcss').Config} */

const projectPaths = ['./capstone/templates/**/*.html']

const contentPaths = [...projectPaths]
console.log(`tailwindcss will scan ${contentPaths}`)

module.exports = {
    content: contentPaths,
    theme: {
        extend: {},
    },
    plugins: [],
}
