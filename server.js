const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT =4000;

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


app.use(express.json());
app.use(require('./routes/authentication'));
app.use(require('./routes/postRoute'));
app.use(require('./routes/userRoute'));

app.listen(PORT,()=>{
    console.log("Server started ")
})

