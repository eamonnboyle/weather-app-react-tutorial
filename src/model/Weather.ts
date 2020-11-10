
export interface Coordinates {
    lon: number;
    lat: number;
}

export interface WeatherConditions {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface MainWeatherData {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

export interface Wind {
    speed: number;
    deg: number;
}

export interface Weather {
    weather: WeatherConditions[];
    main: MainWeatherData;
    visibility: number;
    wind: Wind;
    dt: number;
}

export interface WeatherLocation {
    coord: Coordinates;
    id: number;
    name: string;
}

