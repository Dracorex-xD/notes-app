const express = require("express");
const app = express();
const colors = require('colors');
const Note = require('../models/Notes');
const asyncHandler = require('express-async-handler');

app.use(express.json());

//Get
const getNotes = asyncHandler(async (req, res) => {
    const notes = await Note.find({});
    console.log(notes);
    res.status(200).json(notes);

});

//Set
const setNotes = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please add a text field');
    }
    const note = await Note.create({
        title: req.body.title,
        text: req.body.text,
    });

    res.status(200).json(note);
});

//Update
const updateNotes = asyncHandler(async (req, res) => {
    const note = await Note.find({ _id: req.params.id });
    if (!note) {
        res.status(404);
        throw new Error('Note not found');
    }

    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body,
        {
            new: true,
        });

    res.status(200).json(updatedNote);
});

//Delete
const deleteNotes = asyncHandler(async (req, res) => {
    const note = await Note.find({ _id: req.params.id });
    if (!note) {
        res.status(404);
        throw new Error('Note not found');
    }

    await Note.findByIdAndDelete(note);

    res.status(200).json({ id: req.params.id });
});


module.exports = {
    getNotes, setNotes, updateNotes, deleteNotes
}