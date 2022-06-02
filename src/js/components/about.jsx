import React from 'react';
import aboutIMG from '../../assets/img/about.png';
import reactIMG from '../../assets/img/react.png';

function About() {
  return (
    <div id="about" className="about-container">
      <h1>SOBRE MI</h1>

      <div className="about-columns">
        <div className="about-col-item">
          <ul>
            <li>
              <strong>Nombre: </strong>
              <br />
              Angel Higueros
            </li>
            <li>
              <strong>Email: </strong>
              <br />
              angel.higueros01@gmail.com
            </li>
            <li>
              <strong>LinkedIn: </strong>
              <br />
              linkedin.com/in/angelhigueros
            </li>
          </ul>
        </div>
        <div className="about-col-item">
          <h3>Quien soy</h3>
          <p>
            Soy desarrollador de software, he participado en la creación y
            diseño de aplicaciones React Js. También tengo experiencia en
            resolver problemas de algoritmos en C++ y Python. Estoy estudiando
            en mi tercer año de un ingeniero informático. Competente en varias
            plataformas y lenguajes.
          </p>
          <center>
            <img src={aboutIMG} alt="fullstack logo" width={300} />
            <img src={reactIMG} alt="fullstack logo" width={300} />
          </center>
        </div>
      </div>
    </div>
  );
}

export default About;
