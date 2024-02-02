import React from 'react'
import '../css/clients.css'
import ClientCarousel from './ClientCaraosel'

export const Clients = () => {
  return (
    <div className='client-section' id='work'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='client-content'>
                        <h5>Don't Take Our Word, Here's What Our Clients Have To Say.</h5>
                        <div className='our-client'>
                            <br />
                            <ClientCarousel />
                        </div><br />
                        <p><img src='./images/views-img.png' />115+ 5 Star Reviews</p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='client-img'>
                            <video className='vid2' controls>
                                    <source src='./images/vid1.mp4' type='video/mp4' />
                             </video>
                    </div>      &nbsp; &nbsp;&nbsp;  
                    <div className='client-img'>
                             <video className='vid2' controls>
                                    <source src='./images/vid2.mp4' type='video/mp4' />
                             </video>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
