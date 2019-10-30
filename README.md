# type-linting

This is a basic project to support type linting. You define your types in the src/types.js file. Then you import them into your JavaScript code using relative paths. `@typedef` creates a type for you to use in you code. Below we define a custom `Person` type which as a name, age and job.

```javascript
/**
 * Basic object to define persons.
 * @typedef {Object} Person
 * @prop {string} name
 * @prop {number} age
 * @prop {string} job
 */
```
Then we can use it in another custom type:

```javascript
// The square brackets around workers means that property is optional.
/**
 * A Business type that uses the above Person type.
 * @typedef {Object} Business
 * @prop {string} name
 * @prop {string} address
 * @prop {string} phone
 * @prop {Person[]} [workers]
 */
```

```javascript
/**
 * Define state object.
 * @typedef {Object} State
 * @prop {Business[]} businesses
 */
```

We could then use this to type a state object:

```javascript
/** @type {import('./types').State} */
const state = {
  businesses: [
    {
      name: 'Acme',
      address: '101 Acme Way, Reno, Nevada',
      phone: '111-111-1111',
      workers: [
        {
          name: 'Joe',
          age: 32,
          job: 'worker'
        }
      ]
    },
    {
      name: 'Fontana',
      address: '222 Fontana DR, Elko, Nevada',
      phone: '222-222-2222'
    }
  ]
}
```

While this project is open in Visual Studio Code it will automatically check the types in real time. However, you can also run a type check at any time in the terminal using:

```bash
npm run checkjs
```

If this finishes with no warnings or error messages, you code is type safe.