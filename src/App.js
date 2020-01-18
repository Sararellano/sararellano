import React, { Component } from 'react';
// import { Container } from 'react-bootstrap';
// import { Row } from 'react-bootstrap';
import './style/App.css';


import Menu from './components/Menu'
import Footer from './components/Footer'

class App extends Component{
  // constructor() {
  //   super();

    // this.state = {
      
    // }

    //this.onSubmit = this.onSubmit.bind(this);
  // }

  render(){
    return(
      <div className="App">
        <Menu />
        <Footer />
      </div>
    );
  }
}

export default App;
