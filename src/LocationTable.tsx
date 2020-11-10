import React, {FC} from "react";

interface Props {
    locations: string[];
}

export const LocationTable: FC<Props> = ({locations}) =>
    <div>
        <h2>Locations</h2>
        <table className="table table-hover">
            <thead>
            <tr>
                <th>Location</th>
            </tr>
            </thead>
            <tbody>
            {locations.map(location =>
                <tr>
                    <td>{location}</td>
                </tr>
            )}
            </tbody>
        </table>
    </div>;
