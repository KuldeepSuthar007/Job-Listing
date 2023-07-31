const mongoose = require('mongoose');

const { Schema } = mongoose;

const JobSchema = new Schema({
    email: String,
    companyName: String,
    logoUrl: String,
    jobPosition: String,
    salary: Number,
    jobType: String,
    jobLocation: String,
    location: String,
    jobDesc: String,
    aboutCompany: String,
    skills: Array,
});

module.exports = mongoose.model('Job', JobSchema);