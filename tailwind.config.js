module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        updraft: {
          brand: {
            25: "#F5F8FF",
            50: "#EFF4FF",
            100: "#D1E0FF",
            200: "#B2CCFF",
            300: "#84ADFF",
            400: "#528BFF",
            500: "#2970FF",
            600: "#155EEF",
            700: "#004EEB",
            800: "#0040C1",
            900: "#00359E",
            950: "#002266",
          },
        },
        text: {
          primary: "#101828",
          secondary: "#344054",
          tertiary: "#475467",
        },
      },
    },
  },
  plugins: [],
};
