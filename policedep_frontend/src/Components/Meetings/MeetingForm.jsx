import React, { useState } from 'react';

function MeetingForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        participants: [],
        stationName: '',
        details: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div>
            <h2>Schedule a Meeting</h2>
            <form onSubmit={handleSubmit}>
                <input type="date" name="date" value={formData.date} onChange={handleChange} />
                <input type="time" name="time" value={formData.time} onChange={handleChange} />
                <input type="text" name="participants" placeholder="Participants" value={formData.participants} onChange={handleChange} />
                <input type="text" name="stationName" placeholder="Station Name" value={formData.stationName} onChange={handleChange} />
                <textarea name="details" placeholder="Details" value={formData.details} onChange={handleChange}></textarea>
                <button type="submit">Schedule Meeting</button>
            </form>
        </div>
    );
}

export default MeetingForm;
