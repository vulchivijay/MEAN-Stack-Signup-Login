require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const rtsIndex = require('./routes/index');

var app = express();

// middleware
app.use(bodyParser.json());
app.use(cors()); // or app.use(cors({ origion: 'http://localhost:4200'}))
app.use(passport.initialize());
app.use('/api', rtsIndex);

// error handler
app.use((err, reg, res, next) => {
	if (err.name === 'ValidationError') {
		var valErrors = [];
		Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
		res.status(422).send(valErrors);
	}
});

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));