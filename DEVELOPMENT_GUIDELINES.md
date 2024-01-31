# Introduction

Developing a component library is a bit different from developing a application for a client. Your customer here is another Developer and therefore, it is no easy task! 

This guide will help you understand the best practices for developing a component library in React and the things you should consider before you start developing your component library.

## Table of Contents

- [Introduction](#introduction)
- [Client Components or Server Components ?](#client-components-or-server-components-)
- [React DOM Rendering and Re-Rendering](#react-dom-rendering-and-re-rendering)
- [State Management](#state-management)
    - [Composed Components > Prop Drilling](#composed-components--prop-drilling)
    - [Composed Components over Context API](#composed-components-over-context-api)
    - [Zustand over Context API](#zustand-over-context-api)
    - [Signals over Hooks ( useSignal, useComputed > useState )](#signals-over-hooks--usesignal-,-usecomputed--usestate-)
    - [Epic Theo Rant](#epic-theo-rant)
- [Testing](#testing)
- [Logging](#logging)
- [Theme and Styling](#theme-and-styling)
- [Optimistic Updates](#optimistic-updates)
- [The Frontend Architect Guide](#the-frontend-architect-guide)


# Client Components or Server Components ?
You need to decide whether you want to develop client side components or server side components. Remember if you use [React Hooks](https://react.dev/reference/react/hooks) or custom hooks from other libraries, you will not be able to use them in server side components.

Please refer the following guide from [Next.js](https://nextjs.org/docs/app/building-your-application/rendering#nesting-server-components-inside-client-components) , especially the [Composing Patters](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns) setion for more information on how to decide between client side and server side components.


# React DOM Rendering and Re-Rendering 
For your client components, you need to be aware of how the rendering and re-rendering of components works in React. Ideally, we want to avoid re-rendering of components as much as possible. How you compose your components determines how often your components will re-render. 

Watch the following video to understand how React renders and re-renders components:

[![Re-Rendering of React Components](https://img.youtube.com/vi/ARWX1XdghLk/0.jpg)](https://www.youtube.com/watch?v=ARWX1XdghLk&ab)

Here is another video that explains how to avoid re-rendering of components:

[![React Performance](https://img.youtube.com/vi/7sgBhmLjVws/0.jpg)](https://www.youtube.com/watch?v=7sgBhmLjVws)

# State Management
State management is a complex topic. There are many ways to manage state in React and there are different types of `States` as well. How you design your component library and manage the state of your components will determine how your components will perform.
Therefore, it is important to understand the concepts mentioned below to get a better grasp of managing state in React.

## Composed Components > Prop Drilling
Prop Drilling is a common problem in React. It is important to understand how to avoid prop drilling and how to compose components to avoid prop drilling.

The following video gives a nice example of how to compose components to avoid prop drilling:
[![Composed Compoenents](https://img.youtube.com/vi/vPRdY87_SH0/0.jpg)](https://www.youtube.com/watch?v=vPRdY87_SH0)

> **IMPORTANT:** <span style="color:red">This video talks about using `React Context API` to avoid prop drilling, however, it is important to note that the `Context API` is not available in server side components. Morover, the `Context API` is [not a good solution for state management from a performance POV](https://leewarrick.com/blog/the-problem-with-context/). Please consider using [Zustand](https://github.com/pmndrs/zustand) for state management.</span>

## Composed Components over Context API
Context API lacks performance. Therefore, it is important to understand how to can compose components and avoid prop drilling without using Context API. This video explains how to compose components without using Context API:


[![Composed Components without Context](https://img.youtube.com/vi/3XaXKiXtNjw/0.jpg)](https://www.youtube.com/watch?v=3XaXKiXtNjw)


## Zustand over Context API
> **Note:** Client Side

In cases, where you do need some kind of context in your composed component to avoid prop drilling, you should still avoid using `Context API`. It is not a good solution for state management for client components, when it comes to performance of your components. Please consider using [Zustand](https://github.com/pmndrs/zustand) for state management of your client components ( ideally composed client side components ).

## Signals over Hooks ( useSignal, useComputed > useState )
Signals are useful to develop components that do not re-render unnecessarily. Signals bypass the DOM tree and can update a single value in a component without triggering a re-render of the DOM.

Here is a video explaining how Signals work:

[![Signals Example](https://img.youtube.com/vi/SO8lBVWF2Y8/0.jpg)](https://www.youtube.com/watch?v=SO8lBVWF2Y8)

Please consider installing [`@preact/signals-react`](https://www.npmjs.com/package/@preact/signals-react) for your components.


> **TIP:** You could, for example, create a Zustand store of signals to avoid prop drilling in composed client components.


##  Epic Theo Rant
State management is a complex topic. There are many ways to manage state in React and there are different types of `States` as well. The following video explains the different ways to manage state in React:

[![React State Rant](https://img.youtube.com/vi/5-1LM2NySR0/0.jpg)](https://www.youtube.com/watch?v=5-1LM2NySR0)



# Testing
It is important to write meaningful tests. You should try to test the following wherever possible:

- Given a set of props i.e. a ViewModel, does the component render correctly?
- Given the component is rendered, does it respond to user interaction correctly?
- Given the component is rendered, does it respond to changes in props correctly?
- Given the component is rendered, does it respond to changes in state correctly?
- Given the component is rendered, does it respond to changes in context correctly?

# Logging

It is important to log the right things at the right time. You should consider using the provided logger utility in `lib/utils/logger.ts` package to log messages to the console. 

You can also use the `console.log` method to log messages to the console. It is important to know how to get the most out of the `console.log` method. The following video explains how to use the `console.log` method effectively:

[![Console.log](https://img.youtube.com/vi/L8CDt1J3DAw/0.jpg)](https://www.youtube.com/watch?v=L8CDt1J3DAw)

# Theme and Styling
We are using TailwindCSS for styling. Please refer to the [TailwindCSS Documentation](https://tailwindcss.com/docs/theme) for more information on how to define your theme using TailwindCSS.

When developing your components, consider using the theme variables defined in the `tailwind.config.js` file. This will ensure that your components are consistent with the theme of the component library.

# Optimistic Updates
Optimistic Updates are a great way to improve the user experience of your components. The following video explains how to implement optimistic updates in React:

[![Optimistic Updates](https://img.youtube.com/vi/V0VfR0eaz98/0.jpg)](https://www.youtube.com/watch?v=V0VfR0eaz98)


# The Frontend Architect Guide

Finally, to summarize all of the above and pu you in the right zone for developing your component library, please watch the following video:

[![Frontend Architect Guide](https://img.youtube.com/vi/n62Pc4KV4SM/0.jpg)](https://www.youtube.com/watch?v=n62Pc4KV4SM)