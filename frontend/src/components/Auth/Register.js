import React, { useState } from 'react';
import authService from '../../services/authService';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            await authService.register(username, password);
            alert('User registered');
        } catch (error) {
            alert('Registration failed');
        }
    };

    return (
        <div className="card p-4">
            <h2 className="card-title">Register</h2>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button className="btn btn-primary" onClick={handleRegister}>Register</button>
        </div>
    );
};

export default Register;
