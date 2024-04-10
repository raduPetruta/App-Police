import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const StationView = () => {
    const { id } = useParams();
    const [station, setStation] = useState(null);
   
    const fetchStationDetails = async (id) => {
        try {
            // Make a GET request to fetch station details by ID
            const response = await axios.get(`https://localhost:7197/Station/${id}`);
            return response.data; // Return the fetched station details
        } catch (error) {
            console.error('Error fetching station details:', error);
            return null; // Return null if there's an error
        }
    };

    useEffect(() => {
        // Fetch station details when component mounts
        const getStationDetails = async () => {
            const details = await fetchStationDetails(id);
            setStation(details);
        };
        getStationDetails();
    }, [id]);

    if (!station) {
        return <div>Loading...</div>; // Show loading message while fetching data
    }

    return (
        <div>
            <h2>Station Details</h2>
            <p>Station ID: {station.id}</p>
            <p>Name: {station.name}</p>
            {/* Render other station details here */}
        </div>
    );
};

export default StationView;
