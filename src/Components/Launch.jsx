import React from 'react';
import "../css/launch.css";

function Launch() {
  return (
    <div className='launch-container'>
      <video className='launch-video' src="./images/vid3.mp4" loop type="video/mp4" autoPlay muted></video>
    </div>
  );
}

export default Launch;
