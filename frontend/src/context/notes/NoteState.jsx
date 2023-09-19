import React from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const state = {
    name: "Vaani",
    class: "5b",
  };

  return (
    <NoteContext.Provider value={state}> {/* Note the uppercase 'P' in 'Provider' */}
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
