# Before I Contribute
Please go through the [Development Guidelines](./DEVELOPMENT_GUIDELINES.md) before contributing to this project. It is a short document that contains several valuable tips and tricks for writing React code.

# How Can I Contribute?
## Table of Contents

- [Before I Contribute](#before-i-contribute)
- [How Can I Contribute?](#how-can-i-contribute)
    - [For the Repository](#for-the-repository)
    - [Find/Create an Issue](#findcreate-an-issue)
    - [Create a local working branch](#create-a-local-working-branch)
    - [Commit your changes](#commit-your-changes)
    - [Push changes and create a pull request](#push-changes-and-create-a-pull-request)
- [Local Development](#local-development)
    - [Storybooks](#storybooks)
    - [Testing](#testing)
    - [Linting and Formatting](#linting-and-formatting)
    - [Building](#building)
    - [Developing for a consumer application](#developing-for-a-consumer-application)

## Overview
Please open an issue for any bugs or feature requests or to discuss any changes that you would like to make. If you would like to work on an issue, please assign the issue to yourself and create a branch with the name `feature-<issue-number>-<short-description>` and create a pull request to the `main` branch. Please make sure that the pull request is linked to the issue.

### For the Repository
First off, please create a fork of this repository. Then clone the forked repository to your local machine. 

### Find/Create an Issue
Please ensure that an issue exists on GitHub for the work that you are planning to do. If an issue does not exist, please create one. If an issue exists, please assign the issue to yourself.

### Create a local working branch
Create a local branch that corresponds to the issue. To easily identify the purpose of branches different keywords must be used:

- Patch branches must be named patch-[issue number]-[short description]
- Feature branches must be named feature-[issue number]-[short description]

If you create these branches by hand please check the spelling because otherwise the test automation might misidentify your branch. There are utility scripts to fetch master and create these branches for you:

```bash
./tools/create-patch-branch <unique issue number> '<short_change_message>'
./tools/create-feature-branch <unique issue number> '<short_change_message>'
```

### Commit your changes
Commit your change. The commit command must include a specific message format:

`git commit -m "<component>: <change_message> #<issue number>"`

Valid component names are listed in the label list and are usually specified on the issue of the change. Please reach out to the maintainers if you are unsure about the component name. The change message should be short and concise.

Add additional explanations to the body of the commit, such as motivation for certain decisions and background information. Here are some general rules: https://cbea.ms/git-commit/.


Using multiple commits is allowed as long as they achieve an independent, well-defined, change and are well-described. Otherwise multiple commits should be squashed.

### Push changes and create a pull request
Push the commit to your forked repository and create the pull request. Try to keep the Pull Request simple, it should achieve the single objective described in the issue. Multiple enhancements/fixes should be split into multiple Pull Requests.

The format of the pull request title must be:

`<component>: <short_change_message> #<issue number>`

# Local Development

## Storybooks
The components are developed using Storybook. You can start the storybook server by running:
```bash
npm run dev
```

## Testing
The components are tested in the test folder. You can run the tests by running:
```bash
npm run test
```

or you can run the tests in watch mode by running:
```bash
npm run test:watch
```

You can access the Vitest UI by running:
```bash
npm run test:ui
```

## Linting and Formatting
The components are linted and formatted using ESLint and Prettier. You can run the linter by running:
```bash
npm run lint
```

To fix linting issues, you can run:
```bash
npm run lint -- --fix
```

You can format the code by running:
```bash
npm run format
```

## Building
You can build the components by running:

```bash
npm run build
```

Please check the contents of the `dist` folder after running the build command.

## Developing for a consumer application

Vite features a host mode to enable development with real time HMR updates directly from the library via the `start` script.

If, however, you want to test how your component would work in an external application without Vite's host mode, it might be a good idea to link the components to the external application. This will allow you to make changes to the components and see the changes in the external application without having to publish the components to NPM.

### Setup
First, you should start the storybook server by running:
```bash
npm run dev
```

Then you can run the following command from the root of this repository:
```bash
npm link
```

Then in the consumer application, you can run:
```bash
npm link <package-name>
```

where `<package-name>` is the name of the package in the `package.json` file.

You might want to set tsconsig.json alias to point to the `node_modules/<package_name>` for a more seamless experience.


### Cleanup

To unlink the package, you can run the following command from the root of this repository:
```bash
npm unlink
```

Then in the consumer application, you can run:
```bash
npm unlink <package-name>
```
where `<package-name>` is the name of the package in the `package.json` file.

If mistakenly you forget to unlink the packages, you can cleanup the packages manually by removing it from the `node_modules` folder

For `npm`, the `link` command creates global packages which can be removed by executing:
```bash
sudo npm rm --global "<package_name>"
```

Confirm your npm global packages with the command:
```bash
npm ls --global --depth 0
```




