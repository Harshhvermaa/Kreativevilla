import React from 'react'
import WorkCarousel from './WorkCaraosel'
import '../css/work.css'

export const Work = () => {
    return (
        <section className='work-section' id='blog'>
            <div className='container'>
                <div className='row pb-4'>
                    <div className='col-md-3 col-12'>
                        <div className='work-content'>
                            <h4 className='result'>Results-driven<br></br> digital marketing agency!</h4>
                        </div>
                    </div>
                    <div className='col-md-3 col-12'>
                        <div className='work-content'>
                            <h4>Your Partner in Marketing</h4>
                            <p>We align with your goals and
                                business objectives, tailoring our
                                marketing and advertising
                                strategies to fit your requirements,
                                ensuring they have the impact
                                necessary for your business to
                                thrive.</p>
                        </div>
                    </div>
                    <div className='col-md-3 col-12'>
                        <div className='work-content'>
                            <h4>Your Goals, Our
                                Strategy</h4>
                            <p>Our team of subject matter
                                experts, will create a strategy
                                that’s strategically aligned with
                                your goals. Leveraging years of
                                insight and proven success, we
                                have the expertise to market a
                                business effectively.</p>
                        </div>
                    </div>
                    <div className='col-md-3 col-12'>
                        <div className='work-content'>
                            <h4>Done it for them, We
                                can do it for You</h4>
                            <p>Explore our case studies
                                demonstrating our award-winning
                                web design services and impact-
                                driven marketing campaigns.</p>
                        </div>
                    </div>
                </div>
                
                <div className='row views-row pb-5'>
                    <div className='views-line'>
                        <a><img className='views-img' src='./images/views-img.png' />1 Million Views Generated</a>
                    </div>
                </div>
                <br />
                <div className='row pb-4'>
                    <div className='work-img'>
                       <WorkCarousel />
                    </div>
                </div>
                {/* <div className='row'> */}
                <button className="blackbtn">See Our Work</button>
                {/* </div> */}
            </div>
        </section>
    )
}
