// module.exports = {
//   plugins: {
//     tailwindcss: {config: './tailwind.config.js'},
//     autoprefixer: {},
//   },
// }

const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer')
    ],
};