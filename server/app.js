const express = require('express');
const cors = require('cors');

const app = express();

//allowing cross origin resource sharing
app.use(cors());

//middlewares
//to parse json data 
app.use(express.json());
//to parse url encoded data;
app.use(express.urlencoded({extended: true}));

const userRoutes = require('./src/routes/user');
app.use('/user', userRoutes);

const capsuleRoutes = require('./src/routes/capsule');
app.use('/capsule', capsuleRoutes)


module.exports = app;