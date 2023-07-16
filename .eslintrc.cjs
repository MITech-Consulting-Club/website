module.exports = {
  ignorePatterns: [
      ".pnp.*",
      "next.config.js",
      "next-env.d.ts",
  ],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
};
