const { transform } = require('framer-motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
                opensans: ['Open Sans', 'sans-serif'],
                lato: ['lato', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 7s linear infinite',
            },
            keyframes: {
                "border-spin": {
                    "100%": {
                        transform: 'rotate(-360deg)'
                    }
                }
            },
            animation: {
                'border-spin': 'border-spin 8s linear infinite'
            }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}