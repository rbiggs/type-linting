/**
 * This file contains global types that you can use through your projedt.
 * As your project grows in complexity, you can store types here to use elsewhere.
 * When importing types from here, you'll need to use relative paths to this file.
 * Providing JSDoc type definitions gives you realtime type linting in VSCode.
 * This project is set up to do that already using TypeScript in the background.
 * You can also run a type test at any time from the command line: `npm run checkjs`
 * You can learn more about how to define your JavaScript's type information
 * in the following articles:
 * 1. https://medium.com/@trukrs/javascript-type-linting-5903e9e3625f
 * 2. Example projects: https://github.com/composi/examples
 * Read the documentation on how to use JSDoc to define types: https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html
 */


// A dummy export so that the type defined here are importable:
export function noop() {}

/**
 * Define your program's state here.
 * @typedef {Object} State
 * @prop {Business[]} businesses
 */

/**
 * Basic object to define persons.
 * @typedef {Object} Person
 * @prop {string} name
 * @prop {number} age
 * @prop {string} job
 */
/**
 * A Business type that uses the above Person type.
 * @typedef {Object} Business
 * @prop {string} name
 * @prop {string} address
 * @prop {string} phone
 * @prop {Person[]} [workers]
 */
