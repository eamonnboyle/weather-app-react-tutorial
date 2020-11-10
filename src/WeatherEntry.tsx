import React, {FC} from "react";
import {convertUnixTimeToDate} from "./services/TimeUtilities";
import {getIconUrl} from "./services/WeatherService";
import {Weather} from "./model/Weather";

interface WeatherEntryProps {
    timepoint: Weather;
}

export const WeatherEntry: FC<WeatherEntryProps> = ({timepoint}) =>
    <div>
        <div>{convertUnixTimeToDate(timepoint.dt).toLocaleTimeString()}</div>
        <div>
            <strong>{timepoint.main.temp}°C</strong>
            <div>({timepoint.main.temp_min}°C / {timepoint.main.temp_max}°C)</div>
        </div>
        <div>Humidity: {timepoint.main.humidity}%</div>
        {timepoint.weather.map(condition =>
            <div key={condition.id}>
                <img src={getIconUrl(condition.icon)} alt={condition.main}/> {condition.main} {condition.description}
            </div>)
        }
    </div>;
