import React, { useContext } from 'react';
import NotesContext from '../context/note-context';
import useMousePosition from '../hooks/useMousePosition';

const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext);
  const position = useMousePosition();

  // Setup state to track x and y position (useState)
  // Setup event to listen for mouse movement
  // Remove event listener if unmounted (useEffect)

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <p>{position.x}, {position.y}</p>
      <button onClick={() => dispatch({ type: 'REMOVE_NOTE', title: note.title })}>x</button>
    </div>
  );
}

export default Note;