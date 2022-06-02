import React from 'react';
import uvgIMG from '../../assets/img/uvg.jpg';
import rocaIMG from '../../assets/img/roca.jpg';

function Skills() {
  return (
    <div id="skills" className="skills-container">
      <h1>MIS HABILIDADES</h1>

      <div className="skills-columns">
        <div className="skills-col-item">
          <h3>Experiencia</h3>
          <hr />
          <h4>Applications Development</h4>
          <p>TELUS International Digital Solutions</p>

          <h4>Desarrollador de sitios web </h4>
          <p>System Tecnologies GLHO</p>

          <h4>Desarrollador de software</h4>
          <p>Intcomex Guatemala</p>
          <br />

          <h3>Educación</h3>
          <hr />
          <h4>Universidad del Valle de Guatemala</h4>
          <p>Estudiante de Ingenieria en Ciencias de la Computación y TI</p>
          <center>
            <img src={uvgIMG} alt="fullstack logo" width={100} />
          </center>
          <br />
          <h4>Liceo Roca de Ayuda</h4>
          <p>Bachillerato en Computación</p>
          <center>
            <img src={rocaIMG} alt="fullstack logo" width={100} />
          </center>
        </div>
        <div className="skills-col-item">
          <h3>Habilidades</h3>

          <ul>
            <li>
              <strong>React JS</strong>
            </li>
            <li>
              <strong>Node JS</strong>
            </li>
            <li>
              <strong>Google Cloud Computer</strong>
            </li>
            <li>
              <strong>Docker</strong>
            </li>
            <li>
              <strong>Jenkins</strong>
            </li>
            <li>
              <strong>Openshift</strong>
            </li>
          </ul>

          <h3>Idiomas</h3>
          <ul>
            <li>
              <strong>Ingles</strong>
            </li>
            <li>
              <strong>Español</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
