import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = [
  // 1. ADIM: Global Ignores EN BAŞTA olmalı.
  // Bu sayede altındaki kurallar çalışmadan önce bu dosyalar elenir.
  {
    ignores: [
      ".next/",
      ".next/**",
      "node_modules/",
      "node_modules/**",
      "out/",
      "build/",
      "dist/",
      "coverage/",
      "**/*.min.js", // Sıkıştırılmış JS dosyalarını yoksay
      "pnpm-lock.yaml",
      "package-lock.json",
      "yarn.lock",
      "test-db.js",
      "prisma/client/",
      "prisma/client/**",
      "lib/points.ts"
    ]
  },
  // 2. ADIM: Next.js ve TypeScript kuralları
  ...nextVitals,
  ...nextTs,
  // 3. ADIM: Varsa diğer özel kuralların
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_"
      }]
    }
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