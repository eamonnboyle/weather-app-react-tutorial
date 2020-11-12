import React, {FC} from "react";

interface LocationTableProps {
  locations: string[];
}

export const LocationTable: FC<LocationTableProps> = ({locations}) =>
  <div>
    <h2>Locations</h2>
    <table className="table table-hover">
      <thead>
      <tr>
        <th>Name</th>
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
