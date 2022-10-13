const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String },
    lastname: { type: String },
    username: { type: String, unique: true },
    password: { type: String },
    token: { type: String }
},{
    collection: 'User',
    versionKey: false
});
module.exports = mongoose.model('User', userSchema);