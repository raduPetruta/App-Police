// StationMap.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StationCard from './StationCard';
import AddStationForm from './AddStationForm';

const Station = () => {
    const [stations, setStations] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false);
    var addStationClicked = false;

    const handleOpenForm = () => {
      if(addStationClicked == false) {
        addStationClicked = !addStationClicked;
        setIsFormOpen(true);
      } else {
        addStationClicked = !addStationClicked;
        setIsFormOpen(false);
      }
    };

    useEffect(() => {
        // Fetch list of stations from API
        const fetchStations = async () => {
            try {
                const response = await axios.get('https://localhost:7197/Station');
                setStations(response.data);
            } catch (error) {
                console.error('Error fetching Stations:', error);
            }
        };
        fetchStations();
    }, []);
    
    return (
        <div>
            <div>
              <button onClick={handleOpenForm} className="add-station-button">Add Station</button>
              {isFormOpen && <AddStationForm />}
            </div>
            {stations.map(station => (
                <div>
                <StationCard key={station.id} station={station} />
                </div>
            ))}
        </div>
    );
};

export default Station;