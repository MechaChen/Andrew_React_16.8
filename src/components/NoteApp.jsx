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
      <p>Add Note</p>
      <AddNoteForm dispatch={dispatch}/>
    </NotesContext.Provider>
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