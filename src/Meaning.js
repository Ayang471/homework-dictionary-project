import React from "react";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h4>{props.meaning.partOfSpeech}</h4>
            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>
                        <div className="definition">
                            {definition.definition}
                        </div>
                        <Example example={definition.example} />
                    </div>
                );
            })}
            <div className="Synonyms">
                {props.meaning.synonyms.map(function (synonyms, index) {
                    return (
                        <li key={index}>{synonyms}</li>
                    );
                })}
            </div>
        </div>
    );
}