const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.use(routes);


mongoose.connect(process.env.MONGODB_URI  || 'mongodb://<heroku_gr5k2sgk>:<dbpassword>@ds263808.mlab.com:63808/heroku_gr5k2sgk', {  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });

app.listen(PORT);
