import * as React from "react";
import { ReactComponent as Weather } from "../images/weather-icons/wi-day-cloudy.svg";

export interface Props {
  isHighlight: boolean;
  date: string;
  city: string;
  country: string;
  temp: string;
  windspeed: string;
  humidity: string;
}

class Forecast extends React.Component<Props> {
  render() {
    return (
      <div>
        {this.props.isHighlight ?
          <div className="forecast-highlight">
            <div>
              <p className="date">{this.props.date}</p>
              <span className="location">{this.props.city}</span><span className="location">, </span><span className="location">{this.props.country}</span>
            </div>
            <div className="icon">
              <Weather></Weather>
              <div>
                <span className="degrees">{this.props.temp}</span><span className="degrees"> °</span>
              </div>
            </div>
            <div>
              <div className="wind">
                <span className="title">Wind</span>
                <span className="value">{this.props.windspeed}</span>
              </div>
              <div className="humidity">
                <span className="title">Humidity</span>
                <span className="value">{this.props.humidity}</span>
              </div>
            </div>
          </div> :
          <div className="forecast">
            <div>
              <p className="date">{this.props.date}</p>
            </div>
            <div className="icon">
              <Weather></Weather>
              <div>
                <span className="degrees">{this.props.temp}</span><span className="degrees"> °</span>
              </div>
            </div>
            <div>
            </div>
          </div>}
      </div>


    );
  }
}

export default Forecast;