import React, { useState, useEffect, useRef } from "react";
import "./MainArea.css";

export default function MainArea() {
  return (
    <div className="container-content">
      <h2>Votre plume</h2>
      <form>
        <label htmlFor="title">Le Titre</label>
        <input type="text" id="title" />

        <label htmlFor="subtitle">Sous-titre</label>
        <input type="text" id="subtitle" />

        <label htmlFor="txtbody">Votre Texte</label>
        <textArea id="txtbody" placeholder="Votre texte ..."></textArea>
        <button>Enregistrer</button>
      </form>
    </div>
  );
}
