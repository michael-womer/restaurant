import React from 'react';

const MenuItem = ({ name, description, price, image, colorScheme }) => {
  const cardStyle = {
    border: '1px solid ' + colorScheme == 'dark' ? '#333': '#eee',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
    backgroundColor: colorScheme == 'dark' ? '#333': '#fff',
    transition: 'transform 0.2s ease',
    color: colorScheme == 'dark' ? '#fff': '#333'
  };

  const imgStyle = {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
  };

  const contentStyle = {
    padding: '15px',
    
  };

  const titleStyle = {
    margin: '0 0 10px 0',
    fontSize: '18px',
  };

  const descStyle = {
    fontSize: '14px',
    color: colorScheme == 'dark' ? '#D3D3D3': '#666'

  };

  const costStyle = {
    fontWeight: 'bold',
    marginTop: '10px',
  };


  return (
    <div
      style={{
        ...cardStyle
      }}
    
    >
      <img src={image} alt={name} style={imgStyle} />
      <div style={contentStyle}>
        <h3 style={titleStyle}>{name}</h3>
        <p style={descStyle}>{description}</p>
        <p style={costStyle}>{price}</p>
      </div>
    </div>
  );
};


export default MenuItem;