import './App.css';
import React from 'react';
import axios from 'axios';



class Insert extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        message: null,
        students: [],
        mssv: null,
        student: {
            id: null,
            mssv: null,
            name: null,
            birthday: null,
            email: null,
            sex: null
        }
    }

    renderForm() {
        var result = (
            <div id="inForm">
                <label><h2><b>Form Insert</b></h2></label>
                <form action="http://localhost:4000/student" method="post">
                    <input type="text" name="mssv" placeholder="mssv"></input><br />
                    <input type="text" name="name" placeholder="name"></input><br />
                    <input type="text" name="birthday" placeholder="birthday"></input><br />
                    <input type="text" name="email" placeholder="email"></input><br />
                    <input type="text" name="sex" placeholder="sex"></input><br />
                    {/* <button type="button" onClick={click}>Add</button> */}
                    <button type="submit">Insert</button>
                </form>
            </div>
        );
        return result;
    }
    render() {
        return (
            <div>
                {this.renderForm()}
            </div>
        );
    }
}

export default Insert;
