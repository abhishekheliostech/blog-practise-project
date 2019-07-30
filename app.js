const express = require('express')
const bodyParser = require('body-parser')
const posts = require('./routes/posts.routes')
const mongoose = require('mongoose');
const app = express();
const port = process.env.port || 3000
// Set up mongoose connection
let dev_db_url = 'mongodb+srv://abhishektest:helios%23123@cluster0-vzlsd.mongodb.net/test?retryWrites=true&w=majority';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
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