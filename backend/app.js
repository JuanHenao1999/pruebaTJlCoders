const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

require('dotenv').config()

const port = process.env.PORT || 4000


app.use(cors())
app.use(express.json())

app.use('/usuarios-empleados/signup', require('./routes/signup'))
app.use('/usuarios-empleados/login', require('./routes/login'))
app.use('/usuarios-empleados/user', require('./routes/user'))
app.use('/usuarios-empleados/refresh-token', require('./routes/refreshToken'))
app.use('/usuarios-empleados/signout', require('./routes/signout'))
app.get('/' , (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Server in running on port: ${port}`);
})