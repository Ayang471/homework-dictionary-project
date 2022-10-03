import React from "react";
import "./Phonetics.css";
import Speaker from "./Speaker";

export default function Phonetic(props) {
    return (
        <div className="Phonetic">
            <Speaker speaker={props.phonetic.audio} />
            <span className="text">{props.phonetic.text}</span>
        </div>
    );
}