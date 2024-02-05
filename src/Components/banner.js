import React from 'react'
import '../css/banner.css'
import { motion } from 'framer-motion'

export const Banner = () => {
    return (
        <div className='container'>
            <div className='first-row'>
                <div className='banner-content'>
                    <div className='content'>
                        <h4>Social Media Team You've Been Looking For.</h4>
                        <br />
                        <p>Work with a creative <span className='sme'> social media agency</span> that generates <span className='sme'> <br/>  real results.</span> We make your marketing predictable.</p>
                        <br />

                        <motion.button
                        whileHover={{
                            scale: 1.08
                        }}
                        >Request a Free Quote &nbsp;<motion.img src='./images/arrow1.png' />
                        </motion.button>
                    </div>
                </div>
                <div className='banner-image'>
                    <img className='header-logo' src='./images/banner-image.png' />
                </div>
            </div>
        </div>
    )
}
