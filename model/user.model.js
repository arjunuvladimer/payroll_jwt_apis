const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

// Pre => Before adding/updating to the database  
// Post => Before adding/updating to the database
UserSchema.pre('save', function(next) {
    const saltRounds = 10
    // Encrypt the password
    this.password = bcrypt.hashSync(this.password,saltRounds)
    next() // Consecutive function to be execute
})

module.exports = mongoose.model('user',UserSchema) // Function Call