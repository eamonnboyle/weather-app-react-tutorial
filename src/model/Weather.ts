
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

export interface WeatherData {
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

export interface Clouds {
    all: number;
}


export interface WeatherLocation {
    coord: Coordinates;
    weather: WeatherConditions[];
    main: WeatherData;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    id: number; // City ID
    name: string; // City Name
}

