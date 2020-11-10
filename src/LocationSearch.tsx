import React, {FC, useState} from "react";

interface Props {
    onSearch: (term: string) => void;
}

export const LocationSearch: FC<Props> = ({onSearch}) => {
    const [locationText, setLocationText] = useState('');

    return (
        <div>
            <label>
                Add Location
                <input type="text" value={locationText} onChange={e => setLocationText(e.target.value)}/>
            </label>
            <button onClick={() => onSearch(locationText)}>Add</button>
        </div>
    );
}
