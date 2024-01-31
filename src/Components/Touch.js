import React from "react";
import "../css/touch.css";

export const Touch = () => {
  return (
    <div className="touch-section">
      <div className="container">
        <div className="row">
          <h5 className="touch-title">Time to stop scrolling.</h5>
          {/* <div className='row justify-content-center pb-2'>

                    <button class="Btn">
  
                        <div class="sign">
                            <img className='touch-img' src='./images/arrow1.png' />
                        </div>
                            
                        <div class="text">Contact!</div>
                    </button>

                    </div> */}
          <div class="tw-group tw-relative tw-flex tw-justify-center tw-items-center tw-text-white tw-text-sm tw-font-bold">
            <div class="tw-absolute tw-opacity-0 tw-group-hover:tw-opacity-100 tw-group-hover:-tw-translate-y-[150%] -tw-translate-y-[300%] tw-duration-500 tw-group-hover:tw-delay-500 tw-skew-y-[20deg] tw-group-hover:tw-skew-y-0 tw-shadow-md">
              <div class="tw-flex tw-items-center tw-p-2"></div>

              <div class="tw-rounded-md tw-bg-white tw-group-hover:tw-opacity-0 tw-group-hover:tw-scale-[115%] tw-group-hover:tw-delay-700 tw-duration-500 tw-w-full tw-h-full tw-absolute tw-top-0 tw-left-0"></div>
            </div>

            <div class="tw-shadow-md tw-flex tw-items-center tw-group-hover:tw-gap-2 tw-bg-blue-600 tw-p-3 tw-rounded-full tw-cursor-pointer tw-duration-300">
              <img src="./images/arrow1.png" width="25px" />
              <span class="tw-text-[0px] tw-group-hover:tw-text-sm tw-duration-300">
                Get In Touch
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
