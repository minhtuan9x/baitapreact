import './App.css';
import React from 'react';
import axios from 'axios';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  state = {
    students: [],
    mssv: null,
    openModal: false,
    openModalXoa: false,
    studentUp: [],

    mssv1: null,
    name1: null,
    birthday1: null,
    email1: null,
    sex1: null,

    idxoa: null
  }

  componentDidMount() {
    axios.get('http://localhost:4000/student')
      .then(res => {
        let students = res.data
        this.setState({ students: students });
      }, err => {
        console.log(err)
      });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    var dataSend = {
      mssv: this.state.mssv1,
      name: this.state.name1,
      birthday: this.state.birthday1,
      email: this.state.email1,
      sex: this.state.sex1
    }
    axios.put("http://localhost:4000/student/" + this.state.studentUp._id, dataSend)
      .then(res => {
        window.location.reload()
      })
      .catch(err => {
        alert("loi up");
      })
  }
  onClickButton = (item) => {
    // e.preventDefault()
    this.setState({ studentUp: item })
    this.setState({ openModal: true })
  }

  onCloseModal = () => {
    this.setState({ openModal: false, openModalXoa: false })
  }
  onClickButtonXoa = (id) => {
    this.setState({ idxoa: id })
    this.setState({ openModalXoa: true })
  }
  xoa = (id) => {
    axios.delete('http://localhost:4000/student/' + id)
      .then(res => {
        window.location.reload();
      })
      .catch(err => {
        alert('loi');
        console.error(err);
      })
  }

  renderTable() {
    var table = this.state.students.map(item =>
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
        <td>
          <button type="button" onClick={() => this.onClickButtonXoa(item._id)}>Del</button>
          <button type="button" onClick={() => this.onClickButton(item)}>Up</button>
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
            <th>
              Action
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
  renderFormEdit() {
    return (
      <div>
        <label><h2><b>Form Update</b></h2></label>
        <form onSubmit={this.handleSubmit}>
          <label>ID</label>
          <input type="text" name="id1" onChange={this.handleChange} defaultValue={this.state.studentUp._id} disabled></input><br />
          <label>MSSV</label>
          <input type="text" name="mssv1" onChange={this.handleChange} defaultValue={this.state.studentUp.mssv}></input><br />
          <label>NAME</label>
          <input type="text" name="name1" onChange={this.handleChange} defaultValue={this.state.studentUp.name}></input><br />
          <label>BIRTHDAY</label>
          <input type="text" name="birthday1" onChange={this.handleChange} defaultValue={this.state.studentUp.birthday}></input><br />
          <label>EMAIL</label>
          <input type="text" name="email1" onChange={this.handleChange} defaultValue={this.state.studentUp.email}></input><br />
          <label>SEX</label>
          <input type="text" name="sex1" onChange={this.handleChange} defaultValue={this.state.studentUp.sex}></input><br />
          {/* <button type="button" onClick={click}>Add</button> */}
          <button type="submit">Update</button>
        </form>
      </div>
    )
  }
  renderModal() {
    return (
      <div>
        <Modal open={this.state.openModal} onClose={this.onCloseModal}>
          {this.renderFormEdit()}
        </Modal>
      </div>
    )
  }
  renderModalXoa() {
    return (
      <div>
        <Modal open={this.state.openModalXoa} onClose={this.onCloseModal}>
          <div>
            <br />
            <br />
            <form onSubmit={() => this.xoa(this.state.idxoa)}>
              <label>Bạn có muốn xoá ???</label>
              <br />
              <br />
              <button type="submit">Xoá</button>
              <button type="button" onClick={this.onCloseModal}>Huỷ</button>
            </form>
          </div>
        </Modal>
      </div>
    )
  }

  render() {
    return (
      <div id="rendersearch">
        {this.renderTable()}

        {this.renderModal()}
        {this.renderModalXoa()}
      </div>

    );
  }
}

export default Home;
