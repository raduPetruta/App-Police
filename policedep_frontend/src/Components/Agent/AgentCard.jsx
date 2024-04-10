// AgentCard.js
import React from 'react';
import './AgentCard.css';

const AgentCard = ({ agent }) => {
    return (
        <div className="agent-card">
            <img src={agent.profilePictureURL} alt={agent.name} />
            <h3>{agent.name}</h3>
            <p>Function: {agent.function}</p>
            <p>Age: {agent.age}</p>
            <p>Station: {agent.stationName}</p>
            <p>Reports To: {agent.reportsTo}</p>
        </div>
    );
};

export default AgentCard;
