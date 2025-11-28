/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0a0a0a",
                accent: {
                    blue: "#00f3ff",
                    purple: "#bc13fe",
                },
                glass: "rgba(255, 255, 255, 0.1)",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            },
        },
    },
    plugins: [],
}
