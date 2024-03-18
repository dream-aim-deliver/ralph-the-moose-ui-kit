import "../lib/tailwind/theme.css";
import "../lib/tailwind/tailwind.css";
import type { Preview } from "@storybook/react";
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
        parameters: {
          // actions: { argTypesRegex: '^on.*' },
        },
      },
    },
  },
};

export default preview;
