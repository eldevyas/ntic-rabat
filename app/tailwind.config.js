/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            // Add your custom fonts and enjoy.
            'Outfit': ["Outfit", "Sans-serif"],
            'Cairo': ["Cairo", "Sans-serif"]
        },
        extend: {},
    },
    plugins: [],
}
