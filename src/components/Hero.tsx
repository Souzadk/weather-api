import * as React from "react";
import Forecast from "./Forecast";

export interface Props {
  date: string;
  city: string;
  country: string;
  temp: string;
  windspeed: string;
  humidity: string;
}

class Hero extends React.Component<Props> {
  render() {
    return (
      <div className="full-width">
        <section className="container hero-wrapper">
          <Forecast
            isHighlight={true}
            date={this.props.date}
            city={this.props.city}
            country={this.props.country}
            temp={this.props.temp}
            windspeed={this.props.windspeed}
            humidity={this.props.humidity}
          />
          <Forecast
            isHighlight={false}
            date={'March 11'}
            city={'Aalborg'}
            country={'DK'}
            temp={'8'}
            windspeed={'2m/s'}
            humidity={'87'}
          />
          <Forecast
            isHighlight={false}
            date={'March 12'}
            city={'Aalborg'}
            country={'DK'}
            temp={'-3'}
            windspeed={'2m/s'}
            humidity={'87'}
          />
          <Forecast
            isHighlight={false}
            date={'March 13'}
            city={'Aalborg'}
            country={'DK'}
            temp={'-8'}
            windspeed={'2m/s'}
            humidity={'87'}
          />
          <Forecast
            isHighlight={false}
            date={'March 14'}
            city={'Aalborg'}
            country={'DK'}
            temp={'-10'}
            windspeed={'2m/s'}
            humidity={'87'}
          />
        </section>
      </div>
    );
  }
}

export default Hero;