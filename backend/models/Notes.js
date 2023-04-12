const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    
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