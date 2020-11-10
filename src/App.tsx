import React, {FC, useState} from 'react';
import './App.css';
import {LocationSearch} from './LocationSearch';
import {LocationTable} from './LocationTable';
import {searchLocation} from './services/WeatherService';
import {WeatherLocation} from './model/Weather';
import {ErrorAlert, WarningAlert} from "./Alerts";

const App: FC = () => {
    const [locations, setLocations] = useState<WeatherLocation[]>([]);
    const [error, setError] = useState('');
    const [warning, setWarning] = useState('');

    const resetAlerts = () => {
        if (error !== '') setError('');
        if (warning !== '') setWarning('')
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
    };

    return (
        <div className="container">
            <h1>Weather App</h1>

            <LocationSearch onSearch={onSearch}/>
            <ErrorAlert message={error}/>
            <WarningAlert message={warning}/>
            <LocationTable locations={locations}/>
        </div>
    );
};

export default App;
