const express = require('express')
const bodyParser = require('body-parser')
const posts = require('./routes/posts.routes')
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000
// Set up mongoose connection
const mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB,{useNewUrlParser: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/posts', posts);
app.listen(port, () => {
    console.log('server is running at' + port);
})