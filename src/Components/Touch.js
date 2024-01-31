import React from 'react'
import '../css/touch.css'

export const Touch = () => {
    return (
        <div className='touch-section'>
            <div className='container'>
                <div className='row'>
                    <h5 className='touch-title'>Time to stop scrolling</h5>
                    <div className='row justify-content-center pb-2 mc-animation-wrapper'>
                        <div className='mc-animation-container'>
                            <a href='#' className='text-center'>
                                <div className='mc-animation-outer-ring'>
                                    <img className='touch-img' src='./images/getintouch-logo.png' />
                                </div>
                            </a>
                            <div className='mc-animation-waves'>
                                <div className='mc-animation-inner-wave'></div>
                            </div>
                        </div>
                    </div>
                    <p className='touch-text'><a href='#'>Get In Touch</a></p>
                </div>
            </div>
        </div>
    )
}