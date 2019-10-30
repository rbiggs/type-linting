// Import any dependencies here:


// Import global types:
/**
 * @typedef {import('./types').State} State
 */

// You code goes here:

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
