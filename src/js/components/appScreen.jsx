import React from 'react';
import About from './about';
import Banner from './banner';
import Contact from './Contact';
import Menu from './menu';
import Skills from './skills';
import Work from './work';

function AppScreen() {
  return (
    <div className="container">
      <div className="row is-1">
        <Menu />
      </div>
      <div className="row is-2">
        <Banner />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default AppScreen;
