import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextVitals,
  ...nextTs,
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "pnpm-lock.yaml",
      "package-lock.json",
      "yarn.lock",
      "test-db.js"
    ]
  },
  {
    files: ["test-db.js"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-unused-expressions": "off"
    }
  }
];

export default eslintConfig;
