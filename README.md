# Ralph the Moose UI Kit

This is a React Component Library for [Project Ralph's](https://ralphthemoose.com/) dAPP. 

<div style="text-align:center;">

<table style="border:1px solid #ccc; border-collapse: collapse; width:100%;">
  <tr>
    <td style="padding:10px; border:1px solid #ccc; text-align:center;">
      <a href="https://dream-aim-deliver.github.io/ralph-the-moose-ui-kit/">
        <img src="https://bischrob.github.io/images/githubpages/githubpages.jpeg" alt="Github Pages" width="100px" style="border-radius: 10px;">
      </a>
    </td>
    <td style="padding:10px; border:1px solid #ccc; text-align:center;">
      <a href="https://dream-aim-deliver.github.io/ralph-the-moose-ui-kit/storybook">
        <img src="https://storybook.js.org/images/logos/icon-storybook.png" alt="Storybook" width="100px" style="border-radius: 10px;">
      </a>
    </td>
    <td style="padding:10px; border:1px solid #ccc; text-align:center;">
      <a href="https://dream-aim-deliver.github.io/ralph-the-moose-ui-kit/docs">
        <img src="https://user-images.githubusercontent.com/21266147/101224549-386fb400-368f-11eb-8390-6db2ecd1fe61.png" alt="Docs" height="100px" style="border-radius: 10px;">
      </a>
    </td>
    <td style="padding:10px; border:1px solid #ccc; text-align:center;">
      <a href="https://dream-aim-deliver.github.io/ralph-the-moose-ui-kit/coverage">
        <img src="https://vitest.dev/logo.svg" alt="Coverage" width="100px" height="100px" style="border-radius: 10px;">
      </a>
    </td>
  </tr>
</table>
</div>

## Usage

### Installation and Configuration

The component library built with this template can be used in any project that supports TailwindCSS. After publishing your component library to NPM, you can install it in your project by running:

```
npm install @maany_shr/ralph-the-moose-ui-kit
```

You should then configure the `tailwind.config.js` file in your project to include the styles from the component library.

First, import the tailwind config exported from the component library:

```js
import { defaultTheme } from "@maany_shr/ralph-the-moose-ui-kit";
```

Then, include the theme in your project's `tailwind.config.js` file:

```js
export default {
  theme: {
    ...defaultTheme,
    // other theme configurations, be careful not to override the default theme or provide a merged theme object here
  },
  plugins: [],
};
```

Then, include the plugins from the component library in your project's `tailwind.config.js` file:

```js
import { defaultPlugins } from "@maany_shr/ralph-the-moose-ui-kit";

export default {
  plugins: [defaultPlugins.map((plugin) => require(plugin))].extend([
    // other plugins
  ]),
};
```

Additionally, modify the `content` array in the Tailwind Config to include the components from the component library:

```js
export default {
  content: [
    "@maany_shr/ralph-the-moose-ui-kit/dist/**/*.js",
    ...other sources
  ],
  theme: {
    ...defaultTheme,
    // other theme configurations
  },
}
```

An example of a `tailwind.config.ts` file that includes the component library is shown below:

```ts
import type { Config } from "tailwindcss"
import { defaultTheme, defaultPlugins } from "@maany_shr/ralph-the-moose-ui-kit"

const config = {
  darkMode: ["class"],
  content: [
    './node_modules/@maany_shr/ralph-the-moose-ui-kit/dist/**/*.js',
    ...your content sources
  ],
  prefix: "",
  theme: {
    extend: {
      ...defaultTheme.extend
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-argument
  plugins: [defaultPlugins.map((plugin: string) => require(plugin))],
  // plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
```

The corresponding `tailwind.config.js` file is shown below:

```js
/** @type {import('tailwindcss').Config} */
import {
  defaultTheme,
  defaultContent,
  defaultPlugins,
} from "./lib/tailwind/config";
module.exports = {
  content: [
    "/node_modules/@maany_shr/ralph-the-moose-ui-kit/dist/**/*.js",
    ...defaultContent,
  ],
  prefix: "",

  theme: {
    ...defaultTheme,
  },
  plugins: [defaultPlugins.map((plugin) => require(plugin))],
};
```

Then you can import and use the components in your project:

```tsx
import { Button } from "@maany_shr/ralph-the-moose-ui-kit";
```

### Additional TaiwindCSS Configuration

Your project's TailwindCSS configuration might need additional configurations.
Please check the `lib/tailwind/config.ts` file and the `tailwind.config.js` file in this ui kit to see if you need to include any other configurations in your project.

For example, if you want to enable dark mode in your project, you can add the following configuration to your `tailwind.config.js` file:

```js
module.exports = {
  darkMode: "class",
  // other configurations
};
```

### Theme Configuration

Please install the `next-themes` package and create a `ThemeProvider` component in your project with the following code:

```tsx
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

You can then wrap your application with the `ThemeProvider` component:

```tsx
<ThemeProvider
            defaultTheme="system"
            attribute="class"
            enableSystem
            disableTransitionOnChange
>
  {your app component}
</ThemeProvider>
```

Read More: https://ui.shadcn.com/docs/dark-mode/next 

## Development
### Local Development
To start the development server, run:

```

npm run dev

```

This will start the `Storybook` server at `http://localhost:6006`.

### Development against a project


#### Setup
To develop against a project, you can link the component library to the project. First, build the component library:

```

npm run build

```

Then, link the component library to the project:

```

cd dist
npm link

```

In the project, link the component library:

```

npm link @maany_shr/ralph-the-moose-ui-kit

```

Then, start the development server in the component library:

```

npm run build:watch

```

After that configure TailwindCSS as desribed in the [Usage](#usage) section.


#### Cleanup
To unlink the component library from the project, run:

```

npm unlink @maany_shr/ralph-the-moose-ui-kit

```

Then, unlink the component library:

```

cd dist
npm unlink

```

In case you forgot to unlink the component library,

```

npm rm --global "@maany_shr/ralph-the-moose-ui-kit"

```

Verify the global package is removed:

```

npm list -g --depth=0

```

Then, in the project, do a clean install:

```

npm ci

```


