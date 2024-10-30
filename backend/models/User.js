const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Can't be blank"]
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        require: [true, "Can't be blank"],
        index: true,
        validator: [isEmail, "invalid email"],
    },
    password: {
        type: String,
        require: [true, "Can't be blank"],
    },
    picture: {
        type: String,
    },
    newMessage: {
        type: Object,
        default: {}
    },
    status: {
        type: String,
        default: 'online'
    }
}, {minimize: false})

const User = mongoose.model('User', UserSchema);

module.exports = User;