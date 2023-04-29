import { useState } from 'react';
import Axios from "axios";
import { useEffect } from "react";
import { Note } from "./Note"


const NoteList = (props) => { 
  const URL = "http://localhost:5000/Notes-app/";
  const [listOfNotes, setListOfNotes] = useState([]);

  const deleteNote = async (id, e) => {
    try {
      await Axios.delete(`${URL}${id}`);
      e.target.parentElement.remove();
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    Axios.get(URL).then((response) => {
      setListOfNotes(response.data);
    });
  }, []);

  return (
    <>
      <div className="NoteList" onClick={props.onClick}>
        <ul>
          {
            listOfNotes.map((note) => {         
              return <li className='listElement' key={note._id} id={note._id}>
                <Note title={note.title} text={note.text}/>
                <button onDoubleClick={(e) => { deleteNote(note._id, e) }} className='deleteBtn'>
                  x
                </button>
              </li>
            })
          }
        </ul>
      </div>
    </>
  );
};


export default NoteList;
