import * as React from "react";
import Forecast from "./Forecast";

class Hero extends React.Component {
  render() {
    return (
      <div className="full-width">
        <section className="container hero-wrapper">
          <Forecast
            isHighlight={true}
            date={'Today'}
            city={'Aalborg'}
            country={'DK'}
            temp={'15'}
            windspeed={'2m/s'}
            humidity={'87'}
          ></Forecast>
          <Forecast
            isHighlight={false}
            date={'March 11'}
            city={'Aalborg'}
            country={'DK'}
            temp={'8'}
            windspeed={'2m/s'}
            humidity={'87'}
          ></Forecast>
          <Forecast
            isHighlight={false}
            date={'March 12'}
            city={'Aalborg'}
            country={'DK'}
            temp={'-3'}
            windspeed={'2m/s'}
            humidity={'87'}
          ></Forecast>
          <Forecast
            isHighlight={false}
            date={'March 13'}
            city={'Aalborg'}
            country={'DK'}
            temp={'-8'}
            windspeed={'2m/s'}
            humidity={'87'}
          ></Forecast>
          <Forecast
            isHighlight={false}
            date={'March 14'}
            city={'Aalborg'}
            country={'DK'}
            temp={'-10'}
            windspeed={'2m/s'}
            humidity={'87'}
          ></Forecast>
        </section>
      </div>
    );
  }
}

export default Hero;