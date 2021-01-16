const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./dbconnect/index');

const app = express();

var corsOptions = {
    origin: "http://localhost:1996"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

require('./routes/user.routes')(app);

const PORT = process.env.PORT || 1997;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});