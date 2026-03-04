/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  printWidth: 120,
  tabWidth: 2,

  overrides: [
    {
      files: ["**/*.astro"],
      options: {
        parser: "astro",
      },
    },
  ],

  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
};

export default config;
