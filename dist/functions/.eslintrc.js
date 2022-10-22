module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  ignorePatterns: ["index.js", "routes", "env.js"],
  rules: {
    quotes: ["error", "double"],
  },
};
