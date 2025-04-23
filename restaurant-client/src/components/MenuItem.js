import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({ name, description, price, image }) => {
  const cardStyle = {
    border: '1px solid #eee',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
    backgroundColor: '#fff',
    transition: 'transform 0.2s ease',
    cursor: 'pointer',
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
    color: '#666',
  };

  const costStyle = {
    fontWeight: 'bold',
    marginTop: '10px',
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      style={{
        ...cardStyle,
        transform: isHovered ? 'scale(1.02)' : 'scale(1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default MenuItem;