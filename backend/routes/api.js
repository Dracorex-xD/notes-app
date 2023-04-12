const express = require('express');
const router = express.Router();
const { 
    getNotes, setNotes, updateNotes, deleteNotes
    
} = require('../controllers/noteController');

router.route('/Notes-app/').get(getNotes).post(setNotes);
router.route('/Notes-app/:id').delete(deleteNotes).put(updateNotes);

module.exports = router;