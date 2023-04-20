import { useState } from 'react';
import { AddNoteBtn } from "./AddNoteBtn"
import Axios from "axios";
import { useEffect } from "react";
import { Note } from "./Note"


const NoteList = () => {
  const URL = "http://localhost:5000/Notes-app/";
  const [listOfNotes, setListOfNotes] = useState([]);

  const deleteUsers = async (id, e) => {
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
      <AddNoteBtn />
      <div className="NoteList">
        <ul>
          {
            listOfNotes.map((note) => {
              return <li className='listElement' key={note._id}>
                <Note title={note.title} text={note.text} />
                <button onDoubleClick={(e) => { deleteUsers(note._id, e) }}></button>
              </li>
            })
          }
        </ul>
      </div>
    </>
  );
};


export default NoteList;
