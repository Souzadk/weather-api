import * as React from "react";
import Forecast from "./Forecast";
import WeatherInfo from "../types/WeatherInfo";

export interface Props {
  Forecast: WeatherInfo[];
}

class Hero extends React.Component<Props> {
  render() {
    return (
      <div className="full-width">
        <section className="container hero-wrapper">
          <Forecast
            isHighlight={true}
            weather={this.props.Forecast[0]}
          />
          <Forecast
            isHighlight={false}
            weather={this.props.Forecast[1]}
          />
          <Forecast
            isHighlight={false}
            weather={this.props.Forecast[2]}
          />
          <Forecast
            isHighlight={false}
            weather={this.props.Forecast[3]}
          />
          <Forecast
            isHighlight={false}
            weather={this.props.Forecast[4]}
          />
        </section>
      </div>
    );
  }
}

export default Hero;