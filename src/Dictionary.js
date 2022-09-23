import React from "react";

export default function Dictionary() {
    return (
        <div className="Dictionary">
            <div className="row">
                <div className="col">
                    <form>
                        <input type="search"
                            placeholder="search for any word or phrase"
                            className="form-control"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}