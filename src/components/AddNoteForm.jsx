import React, { useState, useContext } from 'react';
import NotesContext from '../context/note-context';

const AddNoteForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const { dispatch } = useContext(NotesContext);

  const addNote = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_NOTE', title, body });
    setTitle('');
    setBody('');
  }

  return (
    <>
      <p>Add Note</p>
      <form onSubmit={addNote}>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea 
          value={body} 
          onChange={(e) => setBody(e.target.value)}
        >
        </textarea>
        <button>add note</button>
      </form>
    </>
  );
}

export { AddNoteForm as default };