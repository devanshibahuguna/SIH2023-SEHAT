import React from "react";
import NoteContext from "./noteContext";
const NoteState=()=>{
    const state={
        "name":"Vaani",
        "class":"5b"        
    }
    return (
        <NoteContext.provider value={state}>
            {props.children}
        </NoteContext.provider>
    )
}
export default NoteState;