# Poker App

## Technologies and Packages Used

Poker App leverages a variety of technologies and packages to provide a robust, user-friendly experience. Here's an overview of the key technologies and important packages used in the development of Fe-test:

- **React-Bootstrap**: A UI library built specifically for React, React-Bootstrap reimagines Bootstrap in the context of React components. This library provides a suite of pre-built components that can be easily integrated into a React application, eliminating the need for jQuery or Bootstrap's JavaScript. The app leverages these components to create a consistent and efficient user interface. Custom styles can be applied to these components to align with the application's design requirements.

- **Easy Peasy**: A robust, opinionated, but incredibly easy to use state management library for React. The app leverages Easy Peasy for its state management needs, providing a straightforward and efficient way to manage global state. The library's model-based approach to state management aligns well with the application's architecture, allowing for a clean and organized codebase. Actions and selectors provided by Easy Peasy are used throughout the application to interact with the state, ensuring a consistent and predictable state management flow.

- **@testing-library/react**: This library is used for testing React components in a way that resembles how they would be used in real life. It provides utilities for rendering components, querying the DOM, and simulating user interactions.

- **@testing-library/jest-dom**: This library extends Jest's base matchers with custom ones, making it easier to test DOM elements. It provides a set of custom matchers that you can use to extend Jest's matchers.

- **@testing-library/user-event**: This library allows you to simulate user events, such as typing into an input or clicking a button. It provides a more realistic simulation of user interactions than the base fireEvent function.

## Getting Started with the Front-end

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
yarn dev
```

Open your browser and navigate to http://localhost:5173 to see the app

## Run Automated Tests

yarn test

## Design Patterns

Poker App employs several design patterns to ensure a clean, maintainable, and scalable codebase. These patterns facilitate the separation of concerns, making the application easier to understand, develop, and test.

- **Container/Presentational Pattern**
- **Composition Pattern**
- **Render Prop Pattern**
- **Compound Component Pattern**

## Additional Features

- **ESLint, Prettier, Lint-Staged and Husky Integration**

- **Code Quality:** ESLint helps in identifying and reporting on ECMAScript/JavaScript and React errors, with the goal of making code more consistent and avoiding bugs.
- **Code Formatting:** Prettier enforces a consistent style by parsing your code and re-printing it with its own rules, ensuring that the codebase has a uniform formatting style.
- **Automated Checks:** Husky and lint-staged automate the process of running linters and formatters on files that are about to be committed, ensuring that only quality code is committed to the repository.

### Import Aliases

- **Simplified Imports**: Import aliases reduce the complexity of import statements, especially in projects with deep directory structures, making them easier to read and manage.
- **Enhanced Readability**: By providing meaningful names, aliases can make the source of imports clearer, improving code readability.
- **Refactoring Ease**: Aliases can simplify the process of refactoring by decoupling the actual file paths from the import statements, making it easier to move files around without breaking imports.
- **Avoid Relative Path Hell**: They help in avoiding the confusion and maintenance headache associated with using long relative paths like `../../../utils/myUtil`.
- **Consistency Across the Project**: Aliases ensure that imports are consistent across the project, regardless of where the files are located.

### Custom Theme through Theme Provider and Styled Components

- **Consistent Theming**: Utilizing a Theme Provider with Styled Components allows for a consistent theme across the entire application, making it easier to manage and update the UI's look and feel.

- **Improved Scalability**: This method promotes scalability in styling large applications by providing a structured way to apply consistent styles and themes across numerous components.

## Proposed Optimizations

### Preact Signals for Hooks Replacement

A proposed optimizations for the Poker App project is the adoption of Preact Signals to replace traditional React hooks such as `useCallback`, `useEffect`, and others. This change aims to enhance the performance and maintainability of the application by leveraging Preact's efficient state management and side effect handling capabilities.

#### Benefits of Using Preact Signals

- **Performance Improvements:** By replacing React hooks with Preact Signals, the application can benefit from more optimized state updates and side effects, leading to smoother and faster user interactions.
- **Cleaner Code:** Preact Signals allows for a more declarative approach to state management and side effects, resulting in cleaner and more readable code.
- **Efficient State Management:** It provides a set of hooks that are optimized for Preact, ensuring efficient state management without the overhead of React's hooks.
