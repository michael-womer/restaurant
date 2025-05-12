import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Navbar.css'
function Navbar  () {

  const navigate = useNavigate();

  return (
    <div>
    <header className="navbar">
      <div className="navbar__logo">
      
      </div>
      <nav className="navbar__menu">
        <button className="navbar__link" onClick={() => {navigate("/")}}>HOME</button>
        <button className="navbar__link" onClick={() => {navigate("/menu")}}>MENU</button>
        <button className="navbar__link" onClick={() => {navigate("/reserve")}}>RESERVE</button>
      </nav>
    </header>
    </div>
  );
};

export default Navbar;