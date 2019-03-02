const mongoose = require('mongoose');

const userSchema = mongoose.Schema ({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    email: String,
    password: String,
    name: String,
    picture: String,
    city: String,
    country: String,
    list_id: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('User', userSchema);