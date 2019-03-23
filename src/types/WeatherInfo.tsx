export default class WeatherInfo {
  constructor(city: string, country: string, date: Date, temp: number, humidity: number, windspeed: number) {
    this.city = city;
    this.country = country;
    this.date = date;
    this.temp = temp;
    this.humidity = humidity;
    this.windspeed = windspeed;
  }
  city: string;
  country: string;
  date: Date;
  temp: number;
  humidity: number;
  windspeed: number
}