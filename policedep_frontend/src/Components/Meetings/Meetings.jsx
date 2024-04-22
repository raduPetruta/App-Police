import React, { useState, useEffect } from 'react';
import MeetingList from './MeetingList';
import MeetingForm from './MeetingForm';
import axios from 'axios';
import "./Meetings.css"

function Meetings() {
    const [meetings, setMeetings] = useState([]);

    useEffect(() => {
        const fetchMeetings = async () => {
            try {
                const response = await axios.get('https://localhost:7197/Meeting'); 
                setMeetings(response.data); 
            } catch (error) {
                console.error('Error fetching meetings:', error);
            }
        };
        fetchMeetings();
    }, []); 

    const handleAddMeeting = async (formData) => {
        try {
            const response = await axios.post('/api/meetings', formData); // Replace '/api/meetings' with your actual endpoint
            setMeetings(prevMeetings => [...prevMeetings, response.data]); // Assuming the backend returns the newly created meeting data
        } catch (error) {
            console.error('Error adding meeting:', error);
            // Handle error if needed
        }
    };

    return (
        <div>
            <MeetingForm onSubmit={handleAddMeeting} />
            <div className="meetings-container">
              <MeetingList meetings={meetings} />
            </div>
       </div>
    );
}

export default Meetings;
