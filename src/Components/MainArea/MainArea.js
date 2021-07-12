import React, { useState, useEffect, useRef } from "react";
import "./MainArea.css";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

export default function MainArea() {
  const [inpInfo, setInpInfo] = useState({
    title: "",
    subtitle: "",
    body: "",
  });

  const dispatch = useDispatch();
  const [validation, setValidation] = useState(true);

  const allInp = useRef([]);
  const addInp = (el) => {
    if (el && !allInp.current.includes(el)) {
      allInp.current.push(el);
    }
  };

  const updateInputs = (e) => {
    const actualInp = e.target.getAttribute("id");

    const newObjState = { ...inpInfo, [actualInp]: e.target.value };
    setInpInfo(newObjState);
  };

  const handleForm = (e) => {
    e.preventDefault();

    if (inpInfo.title.length < 1) {
      setValidation(false);
      return;
    }
    setValidation(true);

    dispatch({
      type: "ADDNOTE",
      payload: {
        ...inpInfo,
        id: uuidv4(),
      },
    });

    setInpInfo({
      title: "",
      subtitle: "",
      body: "",
    });
  };

  return (
    <div className="container-content">
      <h2>Votre plume</h2>
      <form onSubmit={handleForm}>
        <label htmlFor="title">Le Titre</label>
        <input
          value={inpInfo.title}
          onChange={updateInputs}
          ref={addInp}
          type="text"
          id="title"
        />

        {!validation && (
          <span className="info-validation">Veuillez renseigner un titre.</span>
        )}

        <label htmlFor="subtitle">Sous-titre</label>
        <input
          value={inpInfo.subtitle}
          onChange={updateInputs}
          ref={addInp}
          type="text"
          id="subtitle"
        />

        <label htmlFor="body">Votre Texte</label>
        <textarea
          value={inpInfo.body}
          onChange={updateInputs}
          ref={addInp}
          id="body"
          placeholder="Votre texte ..."
        ></textarea>
        <button>Enregistrer</button>
      </form>
    </div>
  );
}
