# Range Function in TypeScript for easy number generation

A library for generating ranges of numbers, useful for small examples.

```js
// to output all even numbers from 1 to 100
range(0, 101) /* [0 to 100] */
.filter(x => !(x % 2))

// to output sum of natural numbers until 100
range(1, 101)
.reduce((a, b) => a += b)

```