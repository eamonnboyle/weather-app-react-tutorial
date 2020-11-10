import React, {FC, useState} from "react";

interface Props {
    onSearch: (term: string) => void;
}

export const LocationSearch: FC<Props> = ({onSearch}) => {
    const [locationText, setLocationText] = useState('');
    const searchEnabled = locationText.trim() !== '';

    return (
        <div>
            <label>
                Add Location
                <input className="ml-1 mr-1" type="text" value={locationText} onChange={e => setLocationText(e.target.value)}/>
            </label>
            <button disabled={!searchEnabled} className="btn btn-primary" onClick={() => onSearch(locationText)}>Search</button>
        </div>
    );
}
