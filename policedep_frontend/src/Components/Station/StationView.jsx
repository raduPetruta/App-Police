import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AgentCard from "../Agent/AgentCard"
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 from uuid
import { ToastContainer, toast } from 'react-toastify';
import "./StationView.css"

const StationView = () => {
    const { id } = useParams();
    const [station, setStation] = useState(null);
    const [isAddingAgent, setIsAddingAgent] = useState(false);
    const [newAgent, setNewAgent] = useState({
        id: '',
        stationName:'',
        reportsTo:'',
        name: '',
        function: '',
        age: '',
        profilePictureURL: ''
    });

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

    if (!station) {return <div>Loading...</div>}; // Show loading message while fetching data}

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAgent(prevAgent => ({
            ...prevAgent,
            [name]: value
        }));
    };

    const handleAddAgent = async () => {
        try {
            const id = uuidv4();
            newAgent.id = id;
            await axios.post(`https://localhost:7197/Agent?id=${newAgent.id}&name=${newAgent.name}&function=${newAgent.function}&age=${newAgent.age}&profilePictureURL=${newAgent.profilePictureURL}&stationName=${newAgent.stationName}&reportsTo=${newAgent.reportsTo}`, newAgent);
            console.log("New agent added successfully!");
            station.agents.push(newAgent)
            console.log(station)
            setNewAgent({
                name: '',
                function: '',
                age: '',
                profilePictureURL: '',
                stationName:'',
                reportsTo:''
            });
            toast.success("New agent added successfully!");
            setIsAddingAgent(false);
        } catch (error) {
            toast.error("An error occurred.");
            console.error("Error adding new agent:", error);
        }
    };

    return (
        <div className="tab-container">
            <div className="tab station-details-tab">
                <h2>Station Details</h2>
                <p>Station ID: {station.id}</p>
                <p>Name: {station.name}</p>
                <div>
                    <h3>Agents</h3>
                    {station.agents.map(agent => (<AgentCard key={agent._id} agent={agent} />))}
                </div>
            </div>
            <div className="tab add-agent-tab">
                {isAddingAgent ? (
                    <form onSubmit={handleAddAgent}>
                        <input type="text" name="name" placeholder="Name" value={newAgent.name} onChange={handleInputChange} />
                        <input type="text" name="function" placeholder="Function" value={newAgent.function} onChange={handleInputChange} />
                        <input type="text" name="age" placeholder="Age" value={newAgent.age} onChange={handleInputChange} />
                        <input type="text" name="profilePictureURL" placeholder="Profile Picture URL" value={newAgent.profilePictureURL} onChange={handleInputChange} />
                        <input type="text" name="reportsTo" placeholder="Reports To" value={newAgent.reportsTo} onChange={handleInputChange} />
                        <input type="text" name="stationName" placeholder="Station Name" value={newAgent.stationName} onChange={handleInputChange} />
                        <button type="submit">Add Agent</button>
                    </form>
                ) : (
                    <button className="add-agent-button" onClick={() => setIsAddingAgent(true)}>Add Agent</button>
                )}
            </div>
        </div>
    );
};

export default StationView;
