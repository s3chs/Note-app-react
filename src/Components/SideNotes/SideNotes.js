import React, { useEffect, useState } from "react";
import "./SideNotes.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Note from "./Note/Note";

export default function SideNotes() {
  const { notes } = useSelector((state) => state.notesReducer);

  const [notesList, setNotesList] = useState(notes);

  useEffect(() => {
    setNotesList(notes);
  }, [notes]);

  const preventForm = (e) => e.preventDefault();

  return (
    <div className="notes-display">
      <h2>Mes Notes</h2>
      <form onSubmit={preventForm}>
        <input type="text" id="search-notes" placeholder="Rechercher" />
      </form>
      <ul className="notes-list">
        {notesList.map((item) => (
          <Note
            key={item.id}
            id={item.id}
            title={item.title}
            subtitle={item.subtitle}
            body={item.body}
          />
        ))}
      </ul>
    </div>
  );
}
