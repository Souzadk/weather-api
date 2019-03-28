import React, { Component } from 'react';
import './App.scss';
import Menu from './components/Menu';
import Hero from './components/Hero';
import About from './components/About';
import WeatherInfo from './types/WeatherInfo';

const API_KEY = "0235e22f56d7ab60440424af0f7f44a6";

type State = {
  Forecast: WeatherInfo[],
  City: string;
  CountryCode: string;
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
    this.getWeatherFromIp();
  }
  getWeatherFromIp = async () => { // Get City + Country and Fetch Weather on Load from IP Location
    const api_call = await fetch(`http://ip-api.com/json/?fields=status,message,countryCode,city,timezone,query`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      City: data.city,
      CountryCode: data.countryCode,
    }, () => {
      this.getWeatherCallback();
    });
  }
  getOpenWeatherData = async (city: string, country: string) => {
    const tempForecast: WeatherInfo[] = [];
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    for (let i = 0; i < data.list.length; i += 8) {
      const temporary = new WeatherInfo(data.city.name,
        data.city.country,
        data.list[i].dt_txt,
        data.list[i].weather[0].icon + ".svg", // Adding the image type
        data.list[i].weather[0].description,
        data.list[i].main.temp.toFixed(1), // Maximum of 1 decimal
        data.list[i].main.humidity,
        data.list[i].wind.speed.toFixed(1)) // Maximum of 1 decimal
      tempForecast.push(temporary);
      console.log(tempForecast);
    }
    this.setState({
      Forecast: [...tempForecast],
    });
  }
  getWeatherCallback() {
    this.getOpenWeatherData(this.state.City, this.state.CountryCode);
  }
  getWeather = async (e: any) => { //Search for City + Country and Fetch Weather
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
        data.list[i].wind.speed.toFixed(1)) // Maximum of 1 decimal
      tempForecast.push(temporary);
      console.log(tempForecast);
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
        {this.state.Forecast !== null && this.state.Forecast.length !== 0 ? //Checking for Data to display Forecast
          <Hero Forecast={this.state.Forecast} />
          : null
        }
        <About></About>
      </div>
    );
  }
}

export default App;
