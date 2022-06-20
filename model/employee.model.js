const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    fname:{
        type:String,
        required: true
    },
    lname:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    address:{
        type:String,
        required: true
    },
    salary:{
        type:String,
        required: true
    }
}, 
{
    timestamps:true
})

module.exports = mongoose.model('employee', EmployeeSchema)
