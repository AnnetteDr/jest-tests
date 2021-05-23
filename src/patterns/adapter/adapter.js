export class StandartWeatherForecastService {
    constructor(location, date) {
        this.location = location;
        this.date = date;
    }

    getWeatherForecast() {
        return this.formattedData();
    }

    formattedData() {
        return {
            city: this.location,
            temperature: this.getTemperatureInCelsius(this.location, this.date)
        }
    }

    getTemperatureInCelsius(location, date) {
        //retrieve temperature 
        return 30;
    }  
}

export class NewWeatherForecastService {
    constructor(locationDate) {
        this.locationDate = locationDate;
    }

    retrieveWeatherForecast() {
        return this.getTemperatureInFahrenheit(this.locationDate);
    }

    getTemperatureInFahrenheit(locationDateObj) {
        //retrieve temperature 
        return 86;
    }
}

export class WeatherForecastAdapter {
    constructor(adaptee) {
        this.adaptee = adaptee;
    }

    getWeatherForecast() {
        const weatherForecast = this.adaptee.retrieveWeatherForecast(this.adaptee.locationDate);

        return this.formattedData(weatherForecast);
    }

    formattedData(fahrenheitTemp) {
        return {
            city: this.adaptee.locationDate.location,
            temperature: this.toCelsius(fahrenheitTemp)
        }
    }

    toCelsius(fahrenheit) {
        return (fahrenheit- 32) * 5/9;
    }
}

export class Dashboard {
    constructor(weatherForecastService) {
        this.weatherForecastService = weatherForecastService;
    }

    displayWeather() {
        let weatherInfo = this.weatherForecastService.getWeatherForecast();

        return `The current temperature in ${weatherInfo.city} is ${weatherInfo.temperature}`;
    }
}