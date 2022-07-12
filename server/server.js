require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes.js');
const port = process.env.SERVER_PORT;

/* middleware */
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './../dist')));
app.use(router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
