const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;

const {MONGODB_URI} = require('./config');
// require('./models/user_model');
// app.use(express.json());
// app.use(require('./routes/authentication'));


mongoose.connect(MONGODB_URI);

mongoose.connection.on('connected',()=>{
    console.log("connected")
})
mongoose.connection.on('error',()=>{
    console.log("some error",error)
})
require('./models/user_model');
require('./models/post_model');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.use(express.json());
app.use(require('./routes/authentication'));
app.use(require('./routes/postRoute'));
app.use(require('./routes/userRoute'));

app.listen(PORT,()=>{
    console.log("Server started ")
})

