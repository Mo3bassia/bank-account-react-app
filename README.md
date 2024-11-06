# useReducer Bank Account

This is a simple bank account management app built with React, using the `useReducer` hook. It's designed to demonstrate how `useReducer` can be applied to manage state in a more complex way than `useState`.

## Challenge Description

This app solves a simple challenge to demonstrate the use of the `useReducer` hook, which is a state management solution provided by React. The app allows the user to perform basic operations on a bank account, such as:

- Opening an account
- Depositing money
- Withdrawing money
- Requesting and paying off a loan
- Closing the account

The functionality is managed using `useReducer`, making the state transitions more predictable and scalable.

## Live Preview

You can check out the live preview of this project here: [Live Preview](https://bank-account-mo3bassias-projects.vercel.app)

## How it Works

### `useReducer` Hook

- The `useReducer` hook is used to handle the complex state transitions in this app. It is ideal for cases where state logic is more intricate than just simple updates, such as when state changes are dependent on previous state values.

### Reducer Logic

- Each button triggers an action (e.g., deposit, withdraw, open account) that modifies the state through the reducer function. The reducer function receives the current state and an action, then returns the new state based on the action type.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **useReducer**: React hook for managing more complex state logic than `useState`.
