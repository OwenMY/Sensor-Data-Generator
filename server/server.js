require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes.js');
const port = process.env.SERVER_PORT;
const clearDatabase = require('./models/ClearDatabase.js');

/* middleware */
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './../dist')));
app.use(router);

setInterval(clearDatabase, 1000 * 60 * 60 * 24);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
