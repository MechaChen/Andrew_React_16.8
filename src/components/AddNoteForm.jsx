import React, { useState, useContext } from 'react';
import NotesContext from '../context/note-context';
import useMousePosition from '../hooks/useMousePosition';

const AddNoteForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const position = useMousePosition();

  const { dispatch } = useContext(NotesContext);

  const addNote = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_NOTE', title, body });
    setTitle('');
    setBody('');
  }

  return (
    <>
      <p>Add Note {position.x} - {position.y}</p>
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