import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";


export default function Dictionary(props) {
    const [keyword, setKeyword] = useState(props.defaultKeyword);
    const [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        console.log(response.data);
        setPhotos(response.data.photos)
    }

    function search() {
        // documentation: https://dictionaryapi.dev/e
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        const SheCodesApiKey = `fb7td2f4b45ab3397a44co90d20d5054`;
        let SheCodesApiUrl = `   https://api.shecodes.io/images/v1/search?query=${keyword}&key=${SheCodesApiKey}`;
        axios.get(SheCodesApiUrl).then(handlePexelsResponse);
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
                        i.e. yoga, coffee, guitar, plant...
                    </div>
                </section>
                <Results results={results} />
                <Photos photos={photos} />
            </div>
        );
    } else {
        load();
        return "Loading..."
    };
}
