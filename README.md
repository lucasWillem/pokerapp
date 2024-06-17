# Poker App

## Technologies and Packages Used

Poker App leverages a variety of technologies and packages to provide a robust, user-friendly experience. Here's an overview of the key technologies and important packages used in the development of Fe-test:

- **Vite**: Chosen for its blazing-fast development environment, Vite serves as the build tool for the Poker App. Unlike traditional tools that rely on bundling for development, Vite leverages modern browser capabilities to serve modules via native ES Module imports during development. This approach significantly speeds up the server start time and module loading, offering an almost instant feedback loop for developers. For production, Vite produces highly optimized builds with efficient bundling and tree-shaking capabilities. Its simplicity in setup and configuration, combined with powerful features like Hot Module Replacement (HMR), makes Vite an excellent choice for modern web development, enhancing both developer experience and application performance.

- **React-Bootstrap**: A UI library built specifically for React, React-Bootstrap reimagines Bootstrap in the context of React components. This library provides a suite of pre-built components that can be easily integrated into a React application, eliminating the need for jQuery or Bootstrap's JavaScript. The app leverages these components to create a consistent and efficient user interface. Custom styles can be applied to these components to align with the application's design requirements.

- **Easy Peasy**: A robust, opinionated, but incredibly easy to use state management library for React. The app leverages Easy Peasy for its state management needs, providing a straightforward and efficient way to manage global state. The library's model-based approach to state management aligns well with the application's architecture, allowing for a clean and organized codebase. Actions and selectors provided by Easy Peasy are used throughout the application to interact with the state, ensuring a consistent and predictable state management flow.

- **React Hook Form**: This library simplifies form management in React applications, offering an efficient and scalable way to handle form inputs and validations. React Hook Form reduces the amount of boilerplate code needed for creating forms, improving performance and developer productivity. It integrates seamlessly with the application, enhancing the form handling processes with its easy-to-use API and minimal re-renders.

- **React Query**: For server state management, React Query is utilized. It provides powerful tools for fetching, caching, and updating asynchronous data in React applications. This library helps in efficiently managing server data with automatic refetching, caching, and synchronization, ensuring that the UI is always up-to-date with the server state. React Query's simple and declarative API makes server state management straightforward and less error-prone.

- **Cypress**: As a part of our testing strategy, Cypress is used for end-to-end testing. This testing framework allows us to write tests that mimic real user interactions, ensuring that the application behaves as expected in a real-world scenario. Cypress's easy setup, fast test execution, and debugging capabilities make it an invaluable tool for maintaining the quality and reliability of the application.

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

- **yarn cypress:run:component**
- **yarn cypress:run:e2e**

## Design Patterns

Poker App employs several design patterns to ensure a clean, maintainable, and scalable codebase. These patterns facilitate the separation of concerns, making the application easier to understand, develop, and test.

- **Container/Presentational Pattern**
- **Controlled Component Pattern**
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

### Code Splitting in Router

The application implements code splitting within its routing mechanism. This approach significantly enhances the app's performance and user experience by reducing the initial load time. By splitting the code into smaller bundles, only the necessary code is loaded on demand as the user navigates through the app. This leads to:

- **Smaller bundle sizes:** Reduces the amount of code downloaded when the app is first loaded, speeding up the startup time.
- **Faster page transitions:** As users navigate the app, they experience quicker page loads since only the required chunks are fetched.
- **Improved user experience:** Minimizes the time users spend waiting for content to appear, leading to a smoother and more responsive app.

This strategy is particularly beneficial for large-scale applications, ensuring that users receive a fast and efficient service regardless of the app's complexity or the speed of their internet connection.

## Proposed Optimizations

### Preact Signals for Hooks Replacement

A proposed optimizations for the Poker App project is the adoption of Preact Signals to replace traditional React hooks such as `useCallback`, `useEffect`, and others. This change aims to enhance the performance and maintainability of the application by leveraging Preact's efficient state management and side effect handling capabilities.

#### Benefits of Using Preact Signals

- **Performance Improvements:** By replacing React hooks with Preact Signals, the application can benefit from more optimized state updates and side effects, leading to smoother and faster user interactions.
- **Cleaner Code:** Preact Signals allows for a more declarative approach to state management and side effects, resulting in cleaner and more readable code.
- **Efficient State Management:** It provides a set of hooks that are optimized for Preact, ensuring efficient state management without the overhead of React's hooks.
