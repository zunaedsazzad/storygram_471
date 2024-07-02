const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isVerified: {
        type: Boolean,
        default: false
    }
});

const Usersmodel = mongoose.model("users", UsersSchema);
module.exports = Usersmodel;

