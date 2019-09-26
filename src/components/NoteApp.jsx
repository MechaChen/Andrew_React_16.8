import React, { useEffect, useReducer } from 'react';
import notesReducer from '../reducers/notes';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm'
import NotesContext from '../context/note-context';

const NoteApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));
    console.log(notes);
    
    if(notes) {
      dispatch({ type: 'POPULATE_NOTES', notes });
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
    console.log(notes);
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      <h1>Notes</h1>
      <NoteList />
      <AddNoteForm />
    </NotesContext.Provider>
  );
}

// 
// Goal: Refactor AddNoteForm to use context
// 
// 1. Remove the need for the dispatch prop
// 2. Grab dispatch off of context instead
// 3. Test your work!

export default NoteApp;