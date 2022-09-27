import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";


export default function Dictionary(props) {
    const [keyword, setKeyword] = useState(" ");
    const [results, setResults] = useState(null);

    function handleResponse(response) {
        console.log(response.data);
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

    }

    function handleWordChange(event) {
        event.preventDefault();
        setKeyword(event.target.value);
    }
    return (
        <div className="Dictionary">
            <div className="row">
                <div className="col">
                    <form onSubmit={search}>
                        <input type="search"
                            placeholder="search for any word or phrase"
                            className="form-control"
                            onChange={handleWordChange}
                        />
                    </form>
                </div>
            </div>
            <Results results={results} />
        </div>
    );
}