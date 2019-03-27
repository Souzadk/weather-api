import * as React from "react";
import WeatherInfo from "../types/WeatherInfo";

export interface Props {
  isHighlight: boolean;
  weather: WeatherInfo;
}

class Forecast extends React.Component<Props> {
  render() {
    return (
      <div>
        {this.props.isHighlight ?
          <div className="forecast-highlight">
            <div>
              <p className="date">{this.props.weather.date}</p>
              <span className="location">{this.props.weather.city}</span><span className="location">, </span><span className="location">{this.props.weather.country}</span>
            </div>
            <div className="icon">
              <img src={require("../images/weather-icons/" + this.props.weather.icon)} alt={this.props.weather.desc} />
              <div>
                <span className="degrees">{this.props.weather.temp}</span><span className="degrees"> °</span>
              </div>
            </div>
            <div>
              <div className="wind">
                <span className="title">Wind</span>
                <span className="value">{this.props.weather.windspeed}</span>
              </div>
              <div className="humidity">
                <span className="title">Humidity</span>
                <span className="value">{this.props.weather.humidity}</span>
              </div>
            </div>
          </div> :
          <div className="forecast">
            <div>
              <p className="date">{this.props.weather.date}</p>
            </div>
            <div className="icon">
              <img src={require("../images/weather-icons/" + this.props.weather.icon)} alt={this.props.weather.desc} />
              <div>
                <span className="degrees">{this.props.weather.temp}</span><span className="degrees"> °</span>
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