const mongoose = require('mongoose');

const { Schema } = mongoose;

const JobSchema = new Schema({
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
    information: String,
});

module.exports = mongoose.model('Job', JobSchema);