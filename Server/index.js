const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config()

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.send('welcome to home page')
})


app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`)
})