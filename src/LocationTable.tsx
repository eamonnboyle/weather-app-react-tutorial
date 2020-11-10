import React, {FC} from "react";
import {WeatherData, WeatherLocation} from "./model/Weather";

interface Props {
    locations: WeatherLocation[];
}

export const LocationTable: FC<Props> = ({locations}) =>
    <div>
        <h2>Locations</h2>
        <table className="table table-hover">
            <thead>
            <tr>
                <th>Name</th>
                <th>Latitude</th>
                <th>Longitude</th>
            </tr>
            </thead>
            <tbody>
            {locations.map(location =>
                <tr>
                    <td>{location.name}</td>
                    <td>{location.coord.lat}</td>
                    <td>{location.coord.lon}</td>
                </tr>
            )}
            </tbody>
        </table>
    </div>;
