import React, {FC} from "react";
import {convertUnixTimeToDate} from "./services/TimeUtilities";
import {getIconUrl} from "./services/WeatherService";
import {Weather} from "./model/Weather";

interface WeatherEntryProps {
    timePoint: Weather;
}

export const WeatherEntry: FC<WeatherEntryProps> = ({timePoint}) =>
    <div>
        <div>{convertUnixTimeToDate(timePoint.dt).toLocaleTimeString()}</div>
        <div>
            <strong>{timePoint.main.temp}°C</strong>
            <div>({timePoint.main.temp_min}°C / {timePoint.main.temp_max}°C)</div>
        </div>
        <div>Humidity: {timePoint.main.humidity}%</div>
        {timePoint.weather.map(condition =>
            <div key={condition.id}>
                <img src={getIconUrl(condition.icon)} alt={condition.main}/> {condition.main} {condition.description}
            </div>)
        }
    </div>;
