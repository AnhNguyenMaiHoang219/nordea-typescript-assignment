/** @type {import("prettier").Config} */
const config = {
  arrowParens: 'avoid',
  bracketSameLine: false,
  bracketSpacing: true,
  printWidth: 100,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  overrides: [
    {
      files: ['*.json', '*.md'],
      options: {
        tabWidth: 2,
      },
    },
  ],
  plugins: ['prettier-plugin-organize-imports'],
};

export default config;
