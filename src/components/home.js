import React, {Component} from "react";
import WeatherData from "../store/weather-data";
import {toJS} from "mobx";
import {observer} from "mobx-react";
import moment from "moment";
import {Button, Col, Row, Card,Icon} from "antd";

function WeatherDataFile(alldata) {
    console.log(alldata.alldata);
  const weatherData = alldata.alldata.map((Wdata) =>
    <div className="customdiv" key={Wdata.time}>
      
           

            <Col className="gutter-row" span={4}>
            <div className="conternt-area body_date"> 
                <h5> {moment.unix(Wdata.time).format("dddd")} </h5>
                <h6>{moment.unix(Wdata.time).format("Do MMM YYYY")}</h6>
                <div className="wicon"><Icon type="global" /></div>
                <div className="Whl"> 
                <p className="wh_date">{Wdata.temperatureHigh}° C</p>
                <p className="wl_date">{Wdata.temperatureLow}° C</p>
                </div>
            </div>
            </Col>
        

    </div>
  );
  return (
    <Row className="body-conternt-area" gutter={24}>  {weatherData}</Row>
  );
}

const Home = observer(
class Home extends Component {
  componentDidMount() {
    WeatherData.getWeatherData();
  }
  render() {
          let ApiData = [];
          const weatherData = toJS(WeatherData.weatherResult);
          if(Object.keys(weatherData).length) {
            ApiData = weatherData.daily ?  weatherData.daily.data : [];
          }
          return (
              <div className="wraper">
                <WeatherDataFile alldata={ApiData} />
              </div>
          )
      }
  }
);

export default Home;