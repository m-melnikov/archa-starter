/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  printWidth: 120,
  tabWidth: 2,

  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss", "prettier-plugin-astro-organize-imports"],

  overrides: [
    {
      files: ["**/*.astro"],
      options: {
        parser: "astro",
      },
    },
  ],
};

export default config;
