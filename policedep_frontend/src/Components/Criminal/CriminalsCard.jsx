// CriminalCard.js
import React from 'react';
import './CriminalCard.css';

const CriminalCard = ({ criminal }) => {
    return (
        <div className="criminal-card">
            <h3>{criminal.name}</h3>
            <p>Motive: {criminal.motive}</p>
            <p>Age: {criminal.age}</p>
            {/* Display document details */}
        </div>
    );
};

export default CriminalCard;
