const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: [true, `Please enter some text`],

    },
    text: {
        type: String,
        required: [true, `Please enter some text`],

    },
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Note', noteSchema);