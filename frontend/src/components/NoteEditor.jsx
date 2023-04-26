import { useState, useEffect } from 'react';
import axios from 'axios';

const NoteEditor = ({ note }) => {
  let isFirstTime = true;
  const URL = "http://localhost:5000/Notes-app/";
  let [title, setTitle] = useState('');
  let [text, setText] = useState('');

  useEffect(() => {
    const fetchNote = async () => {
      if (note) {
        try {
          const response = await axios.put(`${URL}${note}`);
          setTitle(response.data.title);
          setText(response.data.text);
        } catch (err) {
          console.error(`ERRORS: ${err}`);
        }
      }
    };
    fetchNote();
  }, [note, URL,]);
  let titleText = document.querySelector('.NoteEditorTitle');
  let textText = document.querySelector('.NoteEditorText');

  const handleSaveClick = async () => {
    titleText = document.querySelector('.NoteEditorTitle').value;
    textText = document.querySelector('.NoteEditorText').value;
    console.log(titleText, textText);
    title = titleText;
    text = textText;

    /* const handleTitleChange = () => {
      setTitle(titleText.value);
      console.log(title);
    }
  
    const handleTextChange = () => {
      setText(textText.value);
      console.log(text);
    }
  
    handleTextChange();
    handleTitleChange(); */

    if (isFirstTime) {

    } else if (!title || !text) {
        alert('Both title and text are required');
        return;
      }

    try {
      if (note) {
        console.log('put req');
        await axios.put(`${URL}${note}`, { title, text });

      } else {
        console.log('post req');
        await axios.post(`${URL}`, { title, text });

      }
      /* window.location.reload(); */
    } catch (err) {
      if(isFirstTime === true) {
        isFirstTime = false;

      } else {
      console.error(err);

      }
    }

  }

  return (
    <div className="NoteEditor">
      <>
        <input className="NoteEditorTitle" defaultValue={title} placeholder="Title" />
        <textarea className="NoteEditorText" defaultValue={text} placeholder="Text" />
        <div className="NoteEditorButtons">
          <button className="SaveBtn" onClick={handleSaveClick}>Save</button>
        </div>
      </>
    </div>
  );
};

export default NoteEditor;