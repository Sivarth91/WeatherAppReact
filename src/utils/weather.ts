import axios, { AxiosError, AxiosResponse } from "axios";

export interface WeatherData {
    id: number,
    main: string,
    description: string,
    icon: string
}

export interface MainWeatherInfos {
    temp: number,
    feels_like: string,
    temp_min: number,
    temp_max: number,
    humidity: number
}

export const fetchWeatherData = async (search: string, API_KEY: string) => {
    try {
        const posResponse: AxiosResponse = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${search}&appid=${API_KEY}`);
        const posData = await posResponse.data;
        const { lon, lat } = posData[0];

        const response: AxiosResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        const weatherData: WeatherData[] = response.data.weather;
        const city: string = response.data.name;

        weatherData.forEach(w => {
            console.log(city)
            console.log(w.id);
            console.log(w.main);
            console.log(w.description);
            console.log(w.icon);
        });

        const mainWeatherInfos: MainWeatherInfos[] = response.data.main;
        console.log(mainWeatherInfos)

        if (posData.length == 0) {
          throw new Error('City not found');
        }

    } catch (err: any | AxiosError) {
        console.error(err);
    }

}

