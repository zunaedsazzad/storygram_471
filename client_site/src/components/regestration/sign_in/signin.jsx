
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3500/sign_in', { email, password });
            localStorage.setItem('token', response.data.token);
            navigate('/Home');
        } catch (error) {
            console.error('Error during sign in:', error.response ? error.response.data : error.message);
        }
    };
    

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '30vh',
                textAlign: 'center',
            }}
        >
            <h2>Sign In</h2>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    width: '300px',
                }}
            >
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        style={{ width: '100%' }} // Make input full width
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        style={{ width: '100%'}} // Make input full width
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        marginTop: '20px',
                        width: '30%',
                        backgroundColor: 'greenyellow',
                        marginLeft: '100px'
                         // Add more gap above the button
                    }}
                >
                    Sign In
                </button>
            </form>
        </div>
    );
};

export default Signin;
