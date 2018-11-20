import React, { Component } from 'react';
import { Row, Col } from 'antd';
import '../App.css';

  class Footer extends React.Component {
    render() {
      return (
        <div className="App">
          <Row gutter={24}>
            <Col className="gutter-row" span={24}>
              <div className="footer-area">© 2018. All Rights Reserved | Made by Minhaj.</div>
            </Col>
          </Row>

        </div>
      );
    }
  }

  export default Footer;
