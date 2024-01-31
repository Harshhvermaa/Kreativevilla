import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../css/work.css';

const WorkCarousel = () => {
    const options = {
        loop: true,
        nav: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 2,
            },
        },
    };

    return (
        <OwlCarousel className="owl-theme" {...options}>
            <div className="item">
                <div className='work-img1'>
                    <img src='./images/work-img1.png' />
                </div>
            </div>
            <div className="item">
                <div className='work-img1'>
                    <img src='./images/work-img2.png' />
                </div>
            </div>
            <div className="item">
                <div className='work-img1'>
                    <img src='./images/work-img3.jpg' />
                </div>
            </div>
        </OwlCarousel>
    );
};

export default WorkCarousel;
