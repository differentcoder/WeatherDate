import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import './App.css';

//import Home from './components/home';
import Header from './components/header';
import Bodycontent from './components/bodycontent';
import Footer from './components/footer';

class App extends React.Component {
    render() {
      return (
        <div className="App">
          <Header/>
          <Bodycontent />
          <Footer/>
        </div>
      );
    }
  }

  export default App;