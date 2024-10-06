const { model, Schema } = require('mongoose')
const { createHmac, randomBytes } = require('crypto')


const userSchema = new Schema({
        name:{
         type: String,
          required: true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        salt: {
            type: String,
            required: true
        },
        profileImgURL:
        {
            type: String,
            default: './public/images/avatar.png'
        },
        role:
        {
            type:String,
            default:'USER'
        }
}, {timestamps:true})




const User =  model('Information', userSchema)
module.exports = { User }