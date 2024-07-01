const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String // 'password' should not be capitalized
});

const Usersmodel = mongoose.model("users", UsersSchema);
module.exports = Usersmodel;
