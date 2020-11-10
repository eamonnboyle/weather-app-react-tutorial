import React, {FC, useState} from 'react';
import './App.css';
import {LocationSearch} from "./LocationSearch";
import {LocationTable} from "./LocationTable";

const App: FC = () => {
    const [locations, setLocations] = useState<string[]>([]);

    return (
        <div className="container">
            <h1>Weather App</h1>

            <LocationSearch onSearch={term => setLocations([term, ...locations])}/>
            <LocationTable locations={locations}/>
        </div>
    );
};

export default App;
