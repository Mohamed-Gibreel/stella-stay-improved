module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg":
          "radial-gradient(63.67% 62.72% at 50.05% 63.56%, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), url('/src/assets/living_room.png')",
        logo: "url('/src/assets/logo.png')",
        searchBtn: "linear-gradient(90deg, #72A2AF 0%, #4A7889 100%);",
      },
      backgroundColor: {
        frosted: "rgba(255, 255, 255, 0.8);",
      },
    },
  },
  plugins: [],
};
