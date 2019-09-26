import React, { useEffect, useReducer } from 'react';
import notesReducer from '../reducers/notes';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm'

const NoteApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);

  const removeNote = (title) => {
    dispatch({ type: 'REMOVE_NOTE', title });
  }

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));
    
    if(notes) {
      dispatch({ type: 'POUPLATE_NOTES', notes })
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <h1>Notes</h1>
      <NoteList notes={notes} removeNote={removeNote} />
      <p>Add Note</p>
      <AddNoteForm dispatch={dispatch}/>
    </div>
  );
}

// 
// Goal: Continue refactoring the app
// 
// 1. Create AddNoteForm component
//    - What state is that JSX using? Make it local to new component
//    - What function is that JSX using? It should only need dispatch from the parent
// 2. Render AddNoteFrom in NoteAPp
// 3. Test your work!

export default NoteApp;