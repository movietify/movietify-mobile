const mongoose = require('mongoose');

const listSchema = mongoose.Schema ({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    user_id: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('List', listSchema);