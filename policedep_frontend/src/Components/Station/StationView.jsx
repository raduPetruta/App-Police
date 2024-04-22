import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AgentCard from "../Agent/AgentCard"
<<<<<<< Updated upstream
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 from uuid
import { ToastContainer, toast } from 'react-toastify';
=======
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 from uuid
import 'react-toastify/dist/ReactToastify.css';
>>>>>>> Stashed changes
import "./StationView.css"

const StationView = () => {
    const { id } = useParams();
    const [station, setStation] = useState(null);
<<<<<<< Updated upstream
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
=======
    const [agentByName, setAgentByName] = useState([]);
    const [isAddingAgent, setIsAddingAgent] = useState(false);
    const [newAgentName, setNewAgentName] = useState('');

    useEffect(() => {
        const fetchStationDetails = async () => {
            try {
                const response = await axios.get(`https://localhost:7197/Station/${id}`);
                setStation(response.data);
                fetchAgentsByNames(response.data.agentsNames);
            } catch (error) {
                console.error('Error fetching station details:', error);
            }
        };
        fetchStationDetails();
    }, [id]);

    const fetchAgentsByNames = async (names) => {
>>>>>>> Stashed changes
        try {
            const agents = await Promise.all(names.map(name => fetchAgentByName(name)));
            setAgentByName(agents.filter(agent => agent)); // Filter out any null agents
        } catch (error) {
            console.error('Error fetching agents by names:', error);
        }
    };

    const fetchAgentByName = async (name) => {
        try {
            const response = await axios.get(`https://localhost:7197/Agent/name/${name}`);
            return response.data; 
        } catch (error) {
            console.error('Error fetching Agent:', error);
            return null; 
        }
    };

<<<<<<< Updated upstream
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
=======
    const handleAddAgent = async (e) => {
        e.preventDefault();
        try {
            // Create new agent
            const id = uuidv4();
            const response = await axios.post(`https://localhost:7197/Agent?id=${id}&name=${newAgentName}&function=&age=&profilePictureURL=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTla6fn2chQQBM7xgpzKTprlca2mB9z-fwxUbrNlnDC7w&s&stationName=&reportsTo=`);
            const newAgent = response.data;
            // Add agent to station
            await axios.post(`https://localhost:7197/station/addAgent?stationName=${station.name}&name=${newAgent.name}`);
            toast.success("New agent added successfully!");
            // Fetch updated agents list
            fetchAgentsByNames([...station.agentsNames, newAgent.name]);
            // Clear new agent name
            setNewAgentName('');
            setIsAddingAgent(false);
        } catch (error) {
            toast.error("An error occurred while adding the agent.");
            console.error("Error adding new agent:", error);
        }
    };
    
>>>>>>> Stashed changes

    return (
        <div className="tab-container">
            <div className="tab station-details-tab">
                <h2>Station Details</h2>
<<<<<<< Updated upstream
                <p>Station ID: {station.id}</p>
                <p>Name: {station.name}</p>
                <div>
                    <h3>Agents</h3>
                    {station.agents.map(agent => (<AgentCard key={agent._id} agent={agent} />))}
=======
                {station && (
                    <>
                        <p>Station ID: {station.id}</p>
                        <p>Name: {station.name}</p>
                    </>
                )}
                    <h3>Agents</h3>

                <div className='agents'>
                    {agentByName.map(agent => (
                        <AgentCard key={agent._id} agent={agent} />
                    ))}
>>>>>>> Stashed changes
                </div>
            </div>
            <div className="tab add-agent-tab">
                {isAddingAgent ? (
                    <form onSubmit={handleAddAgent}>
<<<<<<< Updated upstream
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
=======
                        <input type="text" name="name" placeholder="Name" value={newAgentName} onChange={(e) => setNewAgentName(e.target.value)} />
                        <button type="submit">Add Agent</button>
                    </form>
                ) : (
                    <button className="add-agent-button" onClick={() => setIsAddingAgent(true)}>Add Agent to Station</button>
>>>>>>> Stashed changes
                )}
            </div>
        </div>
    );
};

export default StationView;
