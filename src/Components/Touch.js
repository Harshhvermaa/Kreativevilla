import React from "react";
import "../css/touch.css";

export const Touch = () => {
  return (
    <div className="touch-section">
      <div className="container">
        <div className="row">
          <h5 className="touch-title">Time to stop scrolling.</h5>

          <div class="tooltip-container">
            <span class="tooltip">Get In Touch</span>
            <span class="text">
              <div class="borde-back">
                <div class="icon">
                  <img src="./images/arrow1.png" width="20px" />
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
