module.exports = {
  // Type check TypeScript files that are staged
  '**/*.(ts|tsx)': (filenames) =>
    filenames.map((filename) => `npx tsc --noEmit ${filename} --jsx react-jsx`),

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js|jsx)': (filenames) => [
    `npx eslint --fix ${filenames.join(' ')}`,
    `npx prettier --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) => `npx prettier --write ${filenames.join(' ')}`,
}
