module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      tablet: "768px",
      // => @media (min-width: 640px) { ... }

      medium: "960px",
      // => @media (min-width: 1024px) { ... }
      laptop: "1280px",
      desktop: "1440px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
