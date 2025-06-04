import React from 'react';

export default function ErrorBox({ message }) {
  return (
    <div
      style={{
        color: 'tomato',
        backgroundColor: '#2a2a2a',
        padding: '1rem',
        borderRadius: '4px',
        textAlign: 'center',
        margin: '1rem',
      }}
    >
      <p>Error: {message}</p>
    </div>
  );
}