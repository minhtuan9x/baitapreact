import './App.css';
import React from 'react';




class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        students: this.props.students,
    }

    renderTable() {
        var table = this.props.students.map(item =>
            <tr>
                <td>
                    {item.mssv}
                </td>
                <td>
                    {item.name}
                </td>
                <td>
                    {item.birthday}
                </td>
                <td>
                    {item.email}
                </td>
                <td>
                    {item.sex}
                </td>
            </tr>
        )
        var result = (
            <table>
                <thead>
                    <tr>
                        <th>
                            Mssv
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Birthday
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Sex
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {table}
                </tbody>
            </table>
        );
        return result
    }


    render() {
        return (
            <div id="main">
                {this.renderTable()}
                <hr />
            </div>
        );
    }
}

export default Search;
