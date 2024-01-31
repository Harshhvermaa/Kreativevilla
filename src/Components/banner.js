import React from 'react'
import '../css/banner.css'

export const Banner = () => {
    return (
        <div className='container'>
            <div className='first-row'>
                <div className='banner-content'>
                    <div className='content'>
                        <h4>Social Media Team You've Been Looking For.</h4>
                        <p>Work with a Sunshine Coast <span className='sme'> social media agency</span> that generates <span className='sme'> <br/>  real results.</span> We make your marketing predictable.</p>
                        <br />
                        <a>Request a Free Quote &nbsp;<img src='./images/arrow1.png' /></a>
                    </div>
                </div>
                <div className='banner-image'>
                    <img className='header-logo' src='./images/banner-image.png' />
                </div>
            </div>
        </div>
    )
}
