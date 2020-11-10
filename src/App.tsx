import React, {FC, useState} from 'react';
import './App.css';
import {LocationSearch} from './LocationSearch';
import {LocationTable} from './LocationTable';
import {searchLocation} from './services/WeatherService';
import {WeatherLocation} from './model/Weather';
import {ErrorAlert, WarningAlert} from "./Alerts";
import {WeatherSummary} from "./WeatherSummary";

const App: FC = () => {
    const [locations, setLocations] = useState<WeatherLocation[]>([]);
    const [error, setError] = useState('');
    const [warning, setWarning] = useState('');
    const [currentLocation, setCurrentLocation] = useState<WeatherLocation | null>(null);

    const resetAlerts = () => {
        setError('');
        setWarning('');
    }

    let onSearch = async (term: string) => {
        resetAlerts();
        const location = await searchLocation(term);
        if (!location) {
            setError('No location with that name found');
            return;
        }

        if (locations.find(item => item.id === location.id)) {
            setWarning('Location already in the list.');
            return;
        }

        setLocations([location, ...locations]);
        setCurrentLocation(location);
    };

    return (
        <div className="container">
            <h1>Weather App</h1>

            <LocationSearch onSearch={onSearch}/>
            <ErrorAlert message={error}/>
            <WarningAlert message={warning}/>
            <LocationTable locations={locations}
                           current={currentLocation}
                           onSelect={location => setCurrentLocation(location)}/>

            <WeatherSummary location={currentLocation}/>
        </div>
    );
};

export default App;
