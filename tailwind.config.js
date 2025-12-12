/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#0f172a",
                secondary: "#90bbbe",
            },
            fontFamily: {
                audiowide: ["Audiowide", "sans-serif"],
                "EduVICWANTHandPre": ["Edu VIC WA NT Hand Pre", "cursive"],
                comfortaa: ["Comfortaa", "sans-serif"],
                museoModerno: ["MuseoModerno", "sans-serif"],
            },
            keyframes: {
                fadeSlideDown: {
                    "0%": {opacity: "0", transform: "translateY(-50px)"},
                    "100%": {opacity: "1", transform: "translateY(0)"},
                },
                fadeIn: {"0%": {opacity: 0}, "100%": {opacity: 1}},
            },
            animation: {
                fadeSlideDown: "fadeSlideDown 0.8s ease-out forwards",
                fadeIn: "fadeIn 0.5s ease-out forwards",
            },
        },
    },
    plugins: [],
};
