import React, { Component } from 'react';
import './App.scss';
import Menu from './components/Menu';
import Hero from './components/Hero';
import About from './components/About';

const API_KEY = "0235e22f56d7ab60440424af0f7f44a6";
const Forecast = Array();

class App extends Component {
  state = {
    date: "",
    city: "",
    country: "",
    temperature: "",
    windspeed: "",
    humidity: ""
  }
  getWeather = async (e: any) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    for(let i = 0; i<data.list.length; i+=8){
      const temporary = new Array(data.city.name,
                                      data.city.country,
                                      data.list[i].dt_txt,
                                      data.list[i].main.temp,
                                      data.list[i].main.humidity,
                                      data.list[i].wind.speed)
      Forecast.push(temporary);
      console.log(Forecast[0]);
    }
  }
  render() {
    return (
      <div className="full-width" id="bg-gradient">
        <header>
          <Menu getWeather={this.getWeather}/>
        </header>
        <Hero
          date={this.state.date}
          city={this.state.city}
          country={this.state.country}
          temp={this.state.temperature}
          windspeed={this.state.windspeed}
          humidity={this.state.humidity}
        />
        <About></About>
      </div>
    );
  }
}

export default App;
