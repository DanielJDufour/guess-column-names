const { deepStrictEqual } = require("assert");

const guessColumnNames = require("./guess-column-names");

deepStrictEqual(
  guessColumnNames({
    data: [{a: 1, b: 2}, { c: 3, d: 4 }],
    debug: false
  }),
  ['a', 'b', 'c', 'd']
);

deepStrictEqual(
  guessColumnNames({
    data: [
      { name: 'Apple Tree', address: { street: 'Fake St.', city: 'Fake City' } },
      { name: 'Orange Tree' },
      { name: 'Pear Tree' }
    ],
    debug: false
  }),
  [ 'address.city', 'address.street', 'name']
);

deepStrictEqual(
  guessColumnNames({
    data: [{geom: { x: 1, y: 2 }}, { geom: { x: 1, y: 2 }, props: { a: 1, b:2, c: [0, 2, 3] } }],
    debug: false
  }),
  ['geom.x', 'geom.y', 'props.a', 'props.b', 'props.c']
);

// from geojson.org
const geojson = {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [125.6, 10.1]
  },
  "properties": {
    "name": "Dinagat Islands"
  }
};

deepStrictEqual(
  guessColumnNames({
    data: geojson,
    debug: false
  }),
  ['geometry.coordinates', 'geometry.type', 'properties.name', 'type']
);
