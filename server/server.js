const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const router = require('./routes.js');
const port = 3000;

/* middleware */
app.use(cors());
app.use(express.static(path.join(__dirname, './../dist')));
app.use(router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
