import React from 'react';
import About from './about';
import Banner from './banner';
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
      </div>
    </div>
  );
}

export default AppScreen;
