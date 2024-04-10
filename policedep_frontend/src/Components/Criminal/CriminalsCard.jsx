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
            <p>Document ID: {criminal.criminalDocument.id}</p>
            <p>Document Type: {criminal.criminalDocument.type}</p>
            <p>Document Status: {criminal.criminalDocument.status}</p>
        </div>
    );
};

export default CriminalCard;
