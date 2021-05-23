import { StandartWeatherForecastService, NewWeatherForecastService, Dashboard, WeatherForecastAdapter } from './adapter';

const location = "Lviv";
const date = new Date();

let weatherService, dashboard, newWeatherService, adaptedWeatherService, dashboardUsingNewService;

beforeAll(() => {
    weatherService = new StandartWeatherForecastService(location, date);
    dashboard = new Dashboard(weatherService);

    newWeatherService = new NewWeatherForecastService({location, date});
    adaptedWeatherService = new WeatherForecastAdapter(newWeatherService);

    dashboardUsingNewService = new Dashboard(adaptedWeatherService);
});

test("dashboard using standart service will work the same way as dashboard using adapted new service", () => {
    expect(dashboard.displayWeather()).toEqual(dashboardUsingNewService.displayWeather());
});