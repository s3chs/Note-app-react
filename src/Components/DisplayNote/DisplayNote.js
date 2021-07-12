import React from "react";
import { useSelector } from "react-redux";
import "./DisplayNote.css";
import { useParams } from "react-router";

export default function DisplayNote() {
  const { id } = useParams();

  const { notes } = useSelector((state) => state.notesReducer);

  const indexArticle = notes.findIndex((obj) => obj.title === id);

  return (
    <div className="display-txt-zone">
      <h2 className="title-display">
        {notes[indexArticle] ? `${notes[indexArticle].title}` : ""}
      </h2>
      <span className="subtitle-display">
        {notes[indexArticle] ? `${notes[indexArticle].subtitle}` : ""}
      </span>
      <p className="txt-display">
        {notes[indexArticle] ? `${notes[indexArticle].body}` : ""}
      </p>
    </div>
  );
}
