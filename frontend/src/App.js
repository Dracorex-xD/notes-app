import React from 'react';
import NoteEditor from './components/NoteEditor';
import NoteList from './components/NoteList';
import Searchbar from './components/Searchbar';

function App() {

  return (
    <div className="container">
      <div className='sub-container'>
        <NoteList />
        </div>
      <div className='sub-container'>
        <h1 className='title'>Notes App_</h1>
        <Searchbar />
      </div>
      <NoteEditor />
      <div className='sub-container'></div>
    </div>



  );
}

export default App;
