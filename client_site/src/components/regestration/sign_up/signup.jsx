import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        console.log(name, email, password, confirmPassword);
        axios.post('http://localhost:3000/register', { name, email, password, confirmPassword })
            .then(result => {
                console.log(result);
                setMessage('Please check your email to verify your account.');
            })
            .catch(error => console.error('There was an error!', error));
    };

    return (
        <div>
            <h2>Signup</h2>
            {message && <p>{message}</p>}
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <button onClick={handleSignup}>Sign Up</button>
            <Link to={'/login'}><button>Sign in</button></Link>
        </div>
    );
};

export default Signup;
