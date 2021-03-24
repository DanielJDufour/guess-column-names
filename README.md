# guess-column-names
Guess what the column names for a CSV should be if based on an array of nested objects

# install
```bash
npm install guess-column-names
```

# usage
```js
const guessColumnNames = require("guess-column-names");

const trees = [
  { name: 'Apple Tree', address: { street: 'Fake St.', city: 'Fake City' } },
  { name: 'Orange Tree' },
  { name: 'Pear Tree' }
];

const result = guessColumnNames({
  data: trees,
  debug: false // set to true for more logging
});

// result is [ 'address.city', 'address.street', 'name']
```
