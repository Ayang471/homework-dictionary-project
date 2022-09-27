import React from "react";
import Example from "./Example";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h4>{props.meaning.partOfSpeech}</h4>
            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>
                        <p>
                            <strong>Definition:</strong>{definition.definition}
                            <Example example={definition.example} />
                        </p>
                    </div>
                );
            })}
            <div className="Synonyms">
                {props.meaning.synonyms.map(function (synonyms, index) {
                    return (
                        <ul key={index}>
                            <li>{synonyms}</li>
                        </ul>
                    );
                })}
            </div>
        </div>
    );
}