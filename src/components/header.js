import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import '../App.css';

class Header extends React.Component {
    render() {
      return (
        <div>
          <Row gutter={24}>
            <Col className="gutter-row" span={24}>
              <div className="header-area">
                <div className="logo-images">
                <Icon type="global" /> Weather Date
                </div>
              </div>
            </Col>
          </Row>
          </div>
        );
    }
}
export default Header;