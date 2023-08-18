const path = require("path");

const buildEslintCommand = filenames =>
  `next lint --fix --file ${filenames.map(f => path.relative(process.cwd(), f)).join(" --file ")}`;

module.exports = {
  "*.{js,jsx,ts,tsx,json}": ["prettier --write", buildEslintCommand],
  "src/**/*.(ts|tsx)": () => ["tsc --noEmit", "pnpm test"],
};
