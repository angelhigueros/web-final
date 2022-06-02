import React from 'react';
import linkedinIMG from '../../assets/img/linkedin.png';
import gmailIMG from '../../assets/img/gmail.png';
import gitIMG from '../../assets/img/git.png';

function Contact() {
  return (
    <div id="contact" className="contact-container">
      <h1>HABLAME</h1>

      <div className="skills-columns">
        <div className="skills-col-item">
          <ul>
            <li>
              <strong>
                <img
                  src={linkedinIMG}
                  alt="linkedIn"
                  width={40}
                  style={{ paddingRight: '10px' }}
                />
              </strong>
              angelhigueros
            </li>
            <li>
              <strong>
                <img
                  src={gitIMG}
                  alt="linkedIn"
                  width={40}
                  style={{ paddingRight: '10px' }}
                />
              </strong>
              angelhigueros
            </li>
            <li>
              <strong>
                <img
                  src={gmailIMG}
                  alt="linkedIn"
                  width={40}
                  style={{ paddingRight: '10px' }}
                />
              </strong>
              angel.higueros01@gmail.com
            </li>
          </ul>
        </div>
        <div className="skills-col-item">
          <form>
            <input
              name="correo"
              type="text"
              className="contact-input"
              placeholder="Email"
            />
            <input
              name="mensaje"
              type="text"
              className="contact-input"
              placeholder="Ingresa tu mensaje"
            />
            <button className="contact-button" type="button">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
