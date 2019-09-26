import React, { useState } from 'react';

const AddNoteForm = ({ dispatch }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_NOTE', title, body });
    setTitle('');
    setBody('');
  }

  return (
    <div>
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
    </div>
  );
}

export { AddNoteForm as default };