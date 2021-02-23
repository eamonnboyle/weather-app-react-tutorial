import React, {useState} from 'react';
import './App.css';

function App() {
  const [locationSearch, setLocationSearch] = useState('');
  const [locations, setLocations] = useState<string[]>([]);

  const disableSearch = locationSearch.trim() === '';
  const addLocation = () => {
    setLocations([locationSearch, ...locations]);
    setLocationSearch('');
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      <div>
        <label>
          Add Location
          <input className="ml-1 mr-1" type="text" value={locationSearch}
                 onChange={e => setLocationSearch(e.target.value)}/>
        </label>
        <button className="btn btn-primary"
                onClick={addLocation} disabled={disableSearch}>Search</button>
      </div>

      <div>
        <h2>Locations</h2>
        <table className="table table-hover">
          <thead>
          <tr>
            <th>Name</th>
          </tr>
          </thead>
          <tbody>
          {locations.map((location, index) =>
            <tr key={index}><td>{location}</td></tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
