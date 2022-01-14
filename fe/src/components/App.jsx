import './App.css';
import React from 'react';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="main">
        {<Header ten="TUẤN - THÀNH - ĐỈNH"/>}
        {<Footer ten="TUẤN - THÀNH - ĐỈNH"/>}
      </div>
    );
  }
}

export default App;
