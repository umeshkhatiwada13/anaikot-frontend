import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Image3 from "../assets/3.jpg";
import Image4 from "../assets/4.jpg";

const Services = () => {
    return (
        <div className='services'>
            <Carousel>
                <div>
                    <img src={Image3} alt="Full Stack" />
                    <p>Full Stack</p>
                </div>
                <div>
                    <img src={Image4} alt="p2p" />
                    <p>p2p</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Services