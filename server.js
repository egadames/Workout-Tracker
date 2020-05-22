const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));


mongoose.connect(process.env.MONGODB_URI  || 'mongodb://<heroku_pqmxfh2p>:<dbpassword>@ds137255.mlab.com:37255/heroku_pqmxfh2p', {  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });

app.use(routes);

app.listen(PORT);
