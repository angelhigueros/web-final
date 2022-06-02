import React from 'react';
import lab1IMG from '../../assets/img/lab1.png';
import lab5IMG from '../../assets/img/lab5.png';
import lab6IMG from '../../assets/img/lab6.png';
import lab10IMG from '../../assets/img/lab10.png';
import proyectoIMG from '../../assets/img/proyecto.png';

function Work() {
  return (
    <div id="work" className="work-container">
      <h1>MI PORTAFOLIO</h1>

      <div className="work-gallery">
        <div className="work-item">
          <a
            target="_blank"
            href="http://stw-uvg-22.site/lab04/ALHC20460/index.html"
            rel="noreferrer"
          >
            <img src={lab1IMG} alt="Portafolio" />
          </a>
          <div className="work-item-text">CSS ONLY - Lab 1</div>
        </div>

        <div className="work-item">
          <a
            target="_blank"
            href="http://stw-uvg-22.site/lab05/parte02/ALHC20460/"
            rel="noreferrer"
          >
            <img src={lab5IMG} alt="Portafolio" />
          </a>
          <div className="work-item-text">JS parte 2 - Lab 5</div>
        </div>

        <div className="work-item">
          <a
            target="_blank"
            href="http://stw-uvg-22.site/lab06/ALHC20460/"
            rel="noreferrer"
          >
            <img src={lab6IMG} alt="Portafolio" />
          </a>
          <div className="work-item-text">WebPack and SASS/SCSS - Lab 6</div>
        </div>
      </div>
      <div className="work-gallery">
        <div className="work-item">
          <a
            target="_blank"
            href="http://stw-uvg-22.site/lab10/ALHC20460/"
            rel="noreferrer"
          >
            <img src={lab10IMG} alt="Portafolio" />
          </a>
          <div className="work-item-text">Calculadora - Lab 10</div>
        </div>
        <div className="work-item">
          <a
            target="_blank"
            href="http://stw-uvg-22.site:4036/"
            rel="noreferrer"
          >
            <img src={proyectoIMG} alt="Portafolio" />
          </a>
          <div className="work-item-text">Proyecto 1: Página web</div>
        </div>
      </div>
    </div>
  );
}

export default Work;
