// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
import UserDetails from '../User/UserDetails';
const Home  = ({ user }) => {
    return (
    <div className="topbar">
    <header>
        <div>
            <h1>Welcome to the Home Page, {user.username}</h1>
        </div>
        <nav>
            <ul>
                <li><Link to="/agents">Agents</Link></li>
                <li><Link to="/criminals">Criminals</Link></li>
                {user.role === 'admin' && <li><Link to="/documents">Documents</Link></li>}
                {user.role === 'admin' && <li><Link to="/meetings">Meetings</Link></li>}
                {user.role === 'admin' && <li><Link to="/messages">Messages</Link></li>}
                <li><Link to="/stations">Stations</Link></li>
            </ul>
            <UserDetails user={user} />
        </nav>
        
    </header>
</div>
    );
};

export default Home;
