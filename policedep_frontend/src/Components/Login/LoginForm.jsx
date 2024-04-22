import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ setUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://localhost:7197/User/login', {
                id: "1",
                username,
                password,
                role:"aa"
            });
            console.log('Login successful:', response.data);
            setUser(response.data); // Set user data in parent component            
            navigate('/home')
        } catch (error) {
            setError('Invalid username or password.');
            console.error('Login failed:', error.response.data);
        }
    };
    
    return (
        <div className="login-container">
        <h3>Police Department</h3>
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="form-label" htmlFor="username">Username:</label>
                <input className="form-input" type="text" id="username" value={username} onChange={handleUsernameChange} />
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="password">Password:</label>
                <input className="form-input" type="password" id="password" value={password} onChange={handlePasswordChange} />
            </div>
            <button className="login-button" type="submit">Login</button>
            {error && <div>{error}</div>}
        </form>
    </div>
    );
};

export default LoginForm;