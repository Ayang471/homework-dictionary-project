import React from "react";
import "./Speaker.css";

export default function Speaker(props) {
    function AudioPlay(event) {
        event.preventDefault();
        let audio = new Audio(props.speaker);
        audio.play();
    }
    return (
        <span className="Speaker">
            <img
                src="../img/microphone.png"
                className="speaker"
                alt="speaker"
                onClick={AudioPlay}
            />
        </span>
    );
}