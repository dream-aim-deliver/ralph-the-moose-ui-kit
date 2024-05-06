/** @type {import('tailwindcss').Config} */
import {
  defaultTheme,
  defaultContent,
  defaultPlugins,
} from "./lib/tailwind/config";

export default {
  content: [...defaultContent],
  darkMode: ["class"],
  theme: {
    ...defaultTheme,
  },
  plugins: [defaultPlugins.map((plugin) => require(plugin))],
};
