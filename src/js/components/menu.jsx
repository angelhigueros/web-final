import React from 'react';
import profileIMG from '../../assets/img/angel.jpg';

function Menu() {
  return (
    <div className="container menu-container">
      <div className="menu-img">
        <img src={profileIMG} alt="" />
      </div>
      <div className="menu-list">
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Sobre mi</a></li>
          <li><a href="#skills">Mis habilidades</a></li>
          <li><a href="#work">Mi trabajo</a></li>
        </ul>
      </div>

      <div className="menu-footer">
        <h4>Angel Higueros</h4>
        <p>20460</p>
      </div>
    </div>
  );
}

export default Menu;
