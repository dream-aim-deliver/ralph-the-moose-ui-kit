import dts from "vite-plugin-dts";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, UserConfig } from "vitest/config";
import { glob } from "glob";
import { extname, relative } from "path";
import { fileURLToPath } from "node:url";
import { peerDependencies } from "./package.json";
import preserveDirectives from "rollup-plugin-preserve-directives";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^@\/components\/(.*)/,
        replacement: path.resolve(__dirname, "lib/components/$1"),
      },
      {
        find: /^@\/assets\/(.*)/,
        replacement: path.resolve(__dirname, "lib/assets/$1"),
      },
    ],
  },
  test: {
    alias: [
      {
        find: /^@\/components\/(.*)/,
        replacement: path.resolve(__dirname, "lib/components/$1"),
      },
      {
        find: /^@\/assets\/(.*)/,
        replacement: path.resolve(__dirname, "lib/assets/$1"),
      },
    ],
    clearMocks: true,
    globals: true,
    environment: "jsdom",
    env: {
      FLAG_TEST_ENV: "true",
    },
    setupFiles: ["tests/vitest.setup.ts"],
    include: ["tests/**/*.{ts,tsx}"],
    exclude: ["tests/**/*.setup.{ts,tsx}"],
    coverage: {
      provider: "v8",
      reporter: ["json", "json-summary", "html", "lcov", "text"],
      reportOnFailure: true,
      // TODO: update coverage thresholds
      // thresholds: {
      //   statements: 10,
      //   branches: 10,
      //   functions: 10,
      //   lines: 10,
      // },
      exclude: [
        "app/**/*.{ts,tsx}",
        "tests/**/*.{ts,tsx}",
        "**/*.config.{ts,tsx,js}",
        ".storybook/",
        "stories/**/*.{ts,tsx}",
        ".eslint*",
        "tools",
        "lib/utils",
        "lib/tailwind",
        "docs",
      ],
    },
  },

  plugins: [dts({ include: ["lib"] }), react()],
  build: {
    copyPublicDir: true,
    lib: {
      entry: path.resolve(__dirname, "lib/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        "react",
        "react/jsx-runtime",
        "tailwindcss",
        ...Object.keys(peerDependencies),
      ],
      input: Object.fromEntries(
        // https://rollupjs.org/configuration-options/#input
        glob.sync("lib/**/*.{ts,tsx}").map((file) => [
          // 1. The name of the entry point
          // lib/nested/foo.js becomes nested/foo
          relative("lib", file.slice(0, file.length - extname(file).length)),
          // 2. The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
          fileURLToPath(new URL(file, import.meta.url)),
        ]),
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
        preserveModules: true,
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
          tailwindcss: "tailwindcss",
          ...peerDependencies,
        },
        plugins: [preserveDirectives()],
      },
    },
    target: "esnext",
    sourcemap: true,
  },
} satisfies UserConfig);
