export default class WeatherInfo {
  constructor(city: string, country: string, date: Date, icon: string, desc: string, temp: number, humidity: number, windspeed: number) {
    this.city = city;
    this.country = country;
    this.date = date;
    this.icon = icon;
    this.desc = desc;
    this.temp = temp;
    this.humidity = humidity;
    this.windspeed = windspeed;
  }
  city: string;
  country: string;
  date: Date;
  icon: string;
  desc: string;
  temp: number;
  humidity: number;
  windspeed: number
}