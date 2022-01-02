/* eslint-disable no-console */
const app = require('./lib/app.js');
const pool = require('./lib/utils/pool.js');

const PORT = process.env.PORT || 7890;

app.listen(PORT, () => {
  console.log(`Started on ${PORT}`);
});

pool.on('EXIT', () => {
  console.log('See Ya!');
  pool.end();
});
