import React from 'react';
import { Link } from 'react-router-dom';

const Initial = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <h1>STORYGRAM</h1>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          marginTop: '20px',
        }}
      >
        <Link to={'/signin'}>
          <button>Sign in</button>
        </Link>
        <Link to={'/register'}>
          <button>Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default Initial;
