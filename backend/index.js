const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require("dotenv").config();
const registerRouter = require('./Routes/registerRoutes');

mongoose.set('strictQuery', false);

mongoose.connect(process.env.DB_URL,{dbName: 'register'}).then(() => {
    console.log("Connected To Database");
}).catch(err => console.log(err));

app.listen(process.env.PORT,()=> {
    console.log("SERVER CONNECTED TO ",process.env.PORT);
})

app.use(bodyParser.json());

app.use('/api/user',registerRouter);


app.use("/api/category",categoryRouter);
app.use("/api/product",productRouter); 