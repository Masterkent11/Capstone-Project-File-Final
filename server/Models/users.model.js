const mongoose = require('mongoose')


const Schema = mongoose.Schema


const userSchema = new schema({
    email: {
        type: String,
        unique: true,
        lowercase: true 
    },
    service:{type: String},
    serviceId: {type: String},
    fullName:{
        type: String,
        required: true
    }
})