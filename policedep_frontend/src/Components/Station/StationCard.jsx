// StationCard.jsx
import React from 'react';
import './StationCard.css';
import { Link } from 'react-router-dom';
const StationCard = ({ station }) => {
    const mapURL = `https://www.google.com/maps/embed/v1/view?key=AIzaSyDrChjbC3FNxdThgcO3suFGY7VrjQFyVYA&center=${station.latitude},${station.longitude}&zoom=15`;
    
    return (
        <Link to={`/stations/${station.id}`}>
        <div className="station-card">
            <h3>Station ID: {station.id}</h3>
            <p>Name: {station.name}</p>
            <div className="station-map">
                <iframe
                    title="Station Location"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    src={mapURL}
                />
            </div>
        </div>
        </Link>
    );
};

export default StationCard;


//51.214752197265625
//10.463885307312012


