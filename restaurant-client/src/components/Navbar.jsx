import React from 'react';
import { useNavigate } from 'react-router-dom';
function Navbar  () {

  const navigate = useNavigate();

  return (
    <div>
    <header className="navbar">
      <div className="navbar__logo">
      
      </div>
      <nav className="navbar__menu">
        <button className="navbar__link" onClick={() => {navigate("/")}}>Home</button>
        <button className="navbar__link" onClick={() => {navigate("/menu")}}>Menu</button>
        <button className="navbar__link" onClick={() => {navigate("/reserve")}}>Reserve</button>
      </nav>
    </header>
    </div>
  );
};

export default Navbar;