import React, {FC, useEffect, useState} from "react";
import {Weather, WeatherLocation} from "./model/Weather";
import {readWeather} from "./services/WeatherService";
import {WeatherEntry} from "./WeatherEntry";

interface WeatherSummaryProps {
    location: WeatherLocation | null;
}

export const WeatherSummary: FC<WeatherSummaryProps> = ({location}) => {
    const [data, setData] = useState<Weather[]>([]);

    useEffect(() => {
        if (location && location.id >= 0) {
            readWeather(location.id).then(data => setData(data));
        }
    }, [location]);

    if (!location || data.length <= 0) return null;

    const [current, ...forecast] = data;

    return (
        <div>
            <hr/>
            <h2>{location.name}</h2>
            <WeatherEntry timePoint={current}/>
            <h2>Forecast</h2>
            <div className="overflow-auto">
                <ol style={({whiteSpace: 'nowrap'})}>
                    {forecast.map(timePoint =>
                        <li key={timePoint.dt}>
                            <WeatherEntry timePoint={timePoint}/>
                        </li>
                    )}
                </ol>
            </div>
        </div>
    );
};
