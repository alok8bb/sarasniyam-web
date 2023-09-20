import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "card-gradient":
                    "linear-gradient(180deg, #1168ce 0%, rgba(69, 125, 209, 0.81) 39.11%, rgba(106, 186, 211, 0.553696) 82.67%, rgba(106, 192, 211, 0.58) 100%)",
                "main-gradient":
                    "linear-gradient(180deg, rgba(72, 156, 255, 0.25) 0%, rgba(108, 106, 211, 0.25) 100%)",
            },
        },
        fontFamily: {
            hindi: "Inknut Antiqua",
            primary: "Istok Web",
        },
    },
    plugins: [],
};
export default config;
