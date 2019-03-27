import React, { Component } from 'react';
import './App.scss';
import Menu from './components/Menu';
import Hero from './components/Hero';
import About from './components/About';
import WeatherInfo from './types/WeatherInfo';

const API_KEY = "0235e22f56d7ab60440424af0f7f44a6";

type State = {
  Forecast: WeatherInfo[],
}

type Props = {

}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

  }

  componentWillMount() {
    this.setState({
      Forecast: [],
    });
  }
  getWeather = async (e: any) => {
    e.preventDefault();
    const tempForecast: WeatherInfo[] = [];
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    for (let i = 0; i < data.list.length; i += 8) {
      const temporary = new WeatherInfo(data.city.name,
        data.city.country,
        data.list[i].dt_txt,
        data.list[i].weather[0].icon + ".svg", // Adding the image type
        data.list[i].weather[0].description,
        data.list[i].main.temp.toFixed(1), // Maximum of 1 decimal
        data.list[i].main.humidity,
        data.list[i].wind.speed)
      tempForecast.push(temporary);
    }
    this.setState({
      Forecast: [...tempForecast],
    });

  }
  render() {
    return (
      <div className="full-width" id="bg-gradient">
        <header>
          <Menu getWeather={this.getWeather} />
        </header>
        {this.state.Forecast !== null && this.state.Forecast.length !== 0 ?
          <Hero Forecast={this.state.Forecast} />
          : null
        }
        <About></About>
      </div>
    );
  }
}

export default App;
