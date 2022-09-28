import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";


export default function Dictionary(props) {
    const [keyword, setKeyword] = useState(props.defaultKeyword);
    const [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function search(){
        // documentation: https://dictionaryapi.dev/e
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();

    }

    function handleWordChange(event) {
        event.preventDefault();
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

        if (loaded) {
            return (
                <div className="Dictionary">
                    <section>
                        <h1>What word do you want to look for?</h1>
                        <form onSubmit={handleSubmit}>
                            <input type="search"
                               defaultValue={props.defaultKeyword}
                                onChange={handleWordChange}
                            />
                        </form>
                        <div className="hint">
                            suggested words: yoga, wine, guitar, plant...
                        </div>
                    </section>
                    <Results results={results} />
                </div>
            );
        } else {
            load();
            return "Loading..."
        };
    }
    