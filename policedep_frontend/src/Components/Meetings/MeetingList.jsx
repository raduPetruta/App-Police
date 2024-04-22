import React from 'react';
import "./MeetingList.css"
function MeetingList({ meetings }) {
    return (
        <div className='meeting'>
            <ul>
                {meetings.map(meeting => (
                    <li key={meeting.id}>
                        <p>Date: {meeting.date}</p>
                        <p>Time: {meeting.time}</p>
                        <p>Participants:</p>
                        <p>Station Name: {meeting.stationName}</p>
                        <p>Details: {meeting.details}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MeetingList;
