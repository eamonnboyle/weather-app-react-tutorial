import React, {FC} from "react";
import {WeatherLocation} from "./model/Weather";

interface Props {
    locations: WeatherLocation[];
    current: WeatherLocation | null;
    onSelect: (location: WeatherLocation) => void;
}

export const LocationTable: FC<Props> = ({locations, current, onSelect}) =>
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
                <tr className={current?.id === location.id ? 'table-primary' : ''}
                    onClick={() => onSelect(location)}>
                    <td>{location.name}</td>
                    <td>{location.coord.lat}</td>
                    <td>{location.coord.lon}</td>
                </tr>
            )}
            </tbody>
        </table>
    </div>;
