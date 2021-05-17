const mongoose = require('mongoose');

// const Schema = mongoose.Schema;
const { Schema } = mongoose;
const slug = require('slug');
const portifolioSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
        slug: {
        type: String,
        required: true,
        unique: true,
        default: function(){return slug(this.title)}
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('portifolio', portifolioSchema);