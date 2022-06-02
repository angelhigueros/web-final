import React from 'react';
import bannerIMG from '../../assets/img/banner.jpg';

function Banner() {
  return (
    <div
      id="home"
      className="banner-img"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${bannerIMG}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="banner-img-inner">
        <span>Full Stack React developer</span>
        <h1 style={{ paddingTop: '50px', color: '#ffff' }}>Angel Higueros</h1>
      </div>
    </div>
  );
}

export default Banner;
