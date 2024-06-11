# Poker App

## Technologies and Packages Used

Poker App leverages a variety of technologies and packages to provide a robust, user-friendly experience. Here's an overview of the key technologies and important packages used in the development of Fe-test:

- **React-Bootstrap**: A UI library built specifically for React, React-Bootstrap reimagines Bootstrap in the context of React components. This library provides a suite of pre-built components that can be easily integrated into a React application, eliminating the need for jQuery or Bootstrap's JavaScript. The app leverages these components to create a consistent and efficient user interface. Custom styles can be applied to these components to align with the application's design requirements.

- **Easy Peasy**: A robust, opinionated, but incredibly easy to use state management library for React. The app leverages Easy Peasy for its state management needs, providing a straightforward and efficient way to manage global state. The library's model-based approach to state management aligns well with the application's architecture, allowing for a clean and organized codebase. Actions and selectors provided by Easy Peasy are used throughout the application to interact with the state, ensuring a consistent and predictable state management flow.

- **@testing-library/react**: This library is used for testing React components in a way that resembles how they would be used in real life. It provides utilities for rendering components, querying the DOM, and simulating user interactions.

- **@testing-library/jest-dom**: This library extends Jest's base matchers with custom ones, making it easier to test DOM elements. It provides a set of custom matchers that you can use to extend Jest's matchers.

- **@testing-library/user-event**: This library allows you to simulate user events, such as typing into an input or clicking a button. It provides a more realistic simulation of user interactions than the base fireEvent function.

## Getting Started

To run the app locally, follow these steps:

1. Clone the repository by git clone command

2. Install Node.js version 20.12.0

3. Install yarn:

```bash
npm install -g yarn
```

4. Install dependencies:

```bash
cd pokerapp; yarn install
```

5. Start the development server:

```bash
yarn start
```

Open your browser and navigate to http://localhost:3000 to see the app

## Run Automated Tests

yarn test

## Design Patterns

Poker App employs several design patterns to ensure a clean, maintainable, and scalable codebase. These patterns facilitate the separation of concerns, making the application easier to understand, develop, and test.

### Container/Presentational Pattern

The Container/Presentational pattern is a widely used pattern in React applications. It involves separating components into two categories:

- **Containers**: These components are concerned with how things work. Containers manage the state, handle data fetching, and contain the business logic of the application. They are often connected to the Redux store or use React's Context API for state management.
- **Presentationals**: These components are concerned with how things look. Presentational components are stateless and purely focused on the presentation layer. They receive data and callbacks exclusively via props.

This pattern enhances the reusability and readability of the code, as it clearly separates the logic from the presentation.

### Composition Pattern

The Composition pattern in React involves building complex UIs from smaller, reusable components passed as children or props. This approach enhances code reusability and modularity, facilitating the construction of maintainable and comprehensible UIs.

By adopting these design patterns, Fe-test ensures a clean separation of concerns, improves code reusability, and enhances the overall maintainability of the application. These patterns provide a structured approach to building React applications, making it easier for developers to work with the codebase and contribute to the project.

## Proposed Optimizations

### Preact Signals for Hooks Replacement

One of the proposed optimizations for the Geo App project is the adoption of Preact Signals to replace traditional React hooks such as `useCallback`, `useEffect`, and others. This change aims to enhance the performance and maintainability of the application by leveraging Preact's efficient state management and side effect handling capabilities.

#### Benefits of Using Preact Signals

- **Performance Improvements:** By replacing React hooks with Preact Signals, the application can benefit from more optimized state updates and side effects, leading to smoother and faster user interactions.
- **Cleaner Code:** Preact Signals allows for a more declarative approach to state management and side effects, resulting in cleaner and more readable code.
- **Efficient State Management:** It provides a set of hooks that are optimized for Preact, ensuring efficient state management without the overhead of React's hooks.

### ESLint, Prettier, Lint-Staged and Husky Integration

Integrating ESLint, Prettier, Lint-Staged and Husky into the Geo App project can significantly improve code quality and consistency. This setup ensures that Lint-Staged checks the code for ESLint errors and performs Prettier formatting before it is committed, helping to maintain a high standard of code quality and preventing common issues from being introduced into the codebase.

#### Benefits of ESLint, Prettier, Lint-Staged and Husky Integration

- **Code Quality:** ESLint helps in identifying and reporting on ECMAScript/JavaScript and React errors, with the goal of making code more consistent and avoiding bugs.
- **Code Formatting:** Prettier enforces a consistent style by parsing your code and re-printing it with its own rules, ensuring that the codebase has a uniform formatting style.
- **Automated Checks:** Husky and lint-staged automate the process of running linters and formatters on files that are about to be committed, ensuring that only quality code is committed to the repository.
