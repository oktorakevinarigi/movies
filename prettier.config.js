module.exports = {
  tabWidth: 2,
  singleQuote: false,
  arrowParens: "avoid",
  semi: true,
  printWidth: 100,
  plugins: [require("prettier-plugin-tailwindcss")],
  tailwindFunctions: ["clsx"],
};
