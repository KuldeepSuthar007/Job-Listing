const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.send('welcome to my website')
})


app.get('/health', (req, res) => {
    const healthcheck = {
        uptime: process.uptime(),
        responsetime: process.hrtime(),
        message: 'OK',
        timestamp: Date.now()
    };
    try {
        res.send(healthcheck);
    } catch (error) {
        healthcheck.message = error;
        res.status(503).send();
    }
})

app.listen(process.env.PORT,
    mongoose.connect(process.env.MONGODB)
        .then(() => {
            console.log(`Server running on http://localhost:${process.env.PORT}`)
        })
        .catch((err) => console.log(err))
)