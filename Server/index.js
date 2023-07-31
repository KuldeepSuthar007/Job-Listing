const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./models/users');
const Job = require('./models/jobs');
dotenv.config()

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('./public'))

app.get('/', (req, res) => {
    // res.send('welcome to my website')
    //Create an error and pass it to the next function
    var err = new Error("i am error");
    next(err);
})


/* Register Routes */

app.post('/api/register', async (req, res) => {
    try {
        const { name, email, password, mobile, checkbox, } = req.body;
        const user = await User.findOne({ email })
        if (user) {
            res.send({
                status: 'Fail',
                message: 'email address already exists. Please login!'
            })
        }

        const encryptedPassword = await bcrypt.hash(password, 10)
        const jwToken = Jwt.sign({ email, password }, process.env.JWT_SECRET, { expiresIn: 60 })
        const newuser = {
            name,
            email,
            password: encryptedPassword,
            mobile,
            checkbox,
            token: jwToken,
        }
        await User.create(newuser)
        res.send({
            status: 'Success',
            message: 'user created successfully'
        })

    } catch (error) {
        console.log(error)
        res.send({
            status: 'Fail',
            message: error.message
        })
    }

})

/* Login Routes */

app.post('/api/login', async (req, res) => {

    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password)
            if (passwordMatch) {
                const jwToken = Jwt.sign(user.toJSON(), process.env.JWT_SECRET)
                res.json({
                    status: 'SUCCESS',
                    message: " your are login successfully",
                    jwToken
                })
            }
            else {
                res.send({
                    status: 'Fail',
                    message: 'Incorrect Password'
                })
            }
        }
        else {
            res.send({
                status: 'Fail',
                message: "User does not exist"
            })
        }
    } catch (error) {
        console.log(error)
        res.json({
            status: 'FAIL',
            message: 'Something went wrong'
        })
    }

})


/* create health route*/
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


app.use((err, req, res, next) => {
    res.status(500);
    res.send("Something went wrong! Please try after some time.")
})


app.listen(process.env.PORT,
    mongoose.connect(process.env.MONGODB)
        .then(() => {
            console.log(`Server running on http://localhost:${process.env.PORT}`)
        })
        .catch((err) => console.log(err))
)