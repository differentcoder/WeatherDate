import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import '../App.css';
import Home from "./home";


class Bodycontent extends React.Component {
    render() {
        return(
        <div className="body">
        <Col className="gutter-row" span={24}>
                <div className="header-title"> 
                America, Los_Angeles
                </div>
            </Col>

            <Col className="gutter-row" span={24}>
                <div className="header-icon-data"> 
                <Icon type="global" /> <p className="todayc">62.37° C </p>
                </div>
            </Col> 

            <Home />
        </div>
        );
    }
  }
  export default Bodycontent;  