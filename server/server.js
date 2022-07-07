const express = require('express');
const app = express();
const router = require('./routes.js');
const port = 3000;

/* middleware */
app.use(router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
