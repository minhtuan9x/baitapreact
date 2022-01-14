import './App.css';
import React from 'react';

export default function (props) {
    var result = (
        <div>
            <br />
            <hr />
            <footer>
                <p>{props.ten}</p>
            </footer>
        </div>
    )
    return result
}