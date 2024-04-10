// Criminals.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CriminalCard from './CriminalsCard';
import './Criminal.css';

const Criminals = () => {
    const [criminals, setCriminals] = useState([]);

    useEffect(() => {
        const fetchCriminals = async () => {
            try {
                const response = await axios.get('https://localhost:7197/Criminal');
                setCriminals(response.data);
            } catch (error) {
                console.error('Error fetching criminals:', error);
            }
        };

        fetchCriminals();
    }, []);

    return (
        <div className="criminals-container">
            <h2>Criminals</h2>
            <div className="criminals-grid">
                {criminals.map(criminal => (
                    <CriminalCard key={criminal.id} criminal={criminal} />
                ))}
            </div>
        </div>
    );
};

export default Criminals;
