
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate()
  const handlesignout=()=>{
    localStorage.clear()
    navigate('/')

  }
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '18vh',
        textAlign: 'center',
    }}
>
      <h1>Welcome to STORYGRAM</h1>
      <p style={{ wordSpacing: '10px' }}>READ LEARN SHARE</p>
      <button onClick={handlesignout}>Sign out</button>
    </div>
  );
}

export default Home;
