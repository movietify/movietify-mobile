const mongoose = require('mongoose');

const movieSchema = mongoose.Schema ({
    _id: mongoose.Schema.Types.ObjectId,
    cover: String,
    video: String,
    title: String,
    imdb: String,
    minute: String,
    year: String,
    genre: String,
    summary: String,
    scriptwriter: String,
    country: String
});

module.exports = mongoose.model('Movie', movieSchema);