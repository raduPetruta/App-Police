// UserDetails.js
import React from 'react';
import "./UserDetails.css";

const UserDetails = ({ user }) => {
    return (
        <div className="user-details">
            <p>Username: {user.username}</p>
            <p>Role: {user.role}</p>
        </div>
    );
};

export default UserDetails;
