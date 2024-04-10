// Agents.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AgentCard from './AgentCard'; // Import AgentCard component
import './Agents.css';

const Agents = () => {
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        // Fetch list of agents from API
        const fetchAgents = async () => {
            try {
                const response = await axios.get('https://localhost:7197/Agent');
                setAgents(response.data);
            } catch (error) {
                console.error('Error fetching agents:', error);
            }
        };

        fetchAgents();
    }, []);

    return (
        <div className="agents-container">
            <h2>Agents</h2>
            <div className="agents-grid">
                {agents.map(agent => (
                    <AgentCard key={agent.id} agent={agent} />
                ))}
            </div>
        </div>
    );
};

export default Agents;
