import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "./Home.jsx";
import Insert from "./Insert.jsx";
import Search from "./Search.jsx";
import axios from 'axios';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    state={
        mssv: '',
        students: []
    }

    handleChange(event) {
        this.setState({ mssv: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        axios.get("http://localhost:4000/student?mssv=" + this.state.mssv)
            .then(res => {
                this.setState({ students: res.data })
                if (this.state.students.length==0)
                    alert('khong tim thay');
                else{
                    ReactDOM.render(<Search students={this.state.students} />, document.getElementById("root"))
                    // window.location.href="http://localhost:3000/insert"
                }
                    
            })
            .catch(err => {
                console.error(err);
            })
    }
    render() {
        return (
            <div>
                <div>
                    <div id="head">
                        <h1>Báo cáo reactJS nhóm: {this.props.ten}</h1>
                    </div>
                    <Router>
                        <div>
                            <ul>
                                <li><Link to="/home">Home</Link></li>
                                <li> <Link to="/insert">Insert</Link></li>
                                <li id="se">
                                    <form onSubmit={this.handleSubmit}>
                                        <input type="text" name="name" placeholder="Search.."
                                            onChange={this.handleChange}
                                        ></input>
                                    </form>
                                </li>
                            </ul>
                            <hr />
                            <br />
                            <Switch>
                                <Route path="/" exact component={Home} />
                                <Route path="/home"> <Home /></Route>
                                <Route path="/insert" > <Insert /> </Route>
                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>

        )
    }
}

export default Header;

