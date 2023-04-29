import React, { useState } from 'react';
import NoteEditor from './components/NoteEditor';
import NoteList from './components/NoteList';
/* import Searchbar from './components/Searchbar'; */

function App() {
  const [selectedNote, setSelectedNote] = useState('');
;

  const handleNoteClick = (note) => {
    setSelectedNote(note.target.id);
  };

  return (
    <div className="container">
      <div className='sub-container'>
        <NoteList onClick={handleNoteClick} />
      </div>
      <div className='sub-container'>
        <h1 className='title'>Notes App</h1>
        {/* <Searchbar /> */}
      </div>
      <NoteEditor note={selectedNote} />
      <div className='sub-container'></div>
    </div>
  );
}

export default App;