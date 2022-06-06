import React from 'react';
import { Carousel } from 'react-bootstrap';
import Banner1 from './Banner1.jpg'
import Banner2 from './Banner2.jpg'
import Banner3 from './Banner3.jpg'
import Banner4 from './Banner4.jpg'
import Banner5 from './Banner5.jpg'


const Banner = () => {
    return (
        <div>
            <div className="d-block">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src={Banner1}
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Banner2}
                            alt="Second slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Banner5}
                            alt="Third slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Banner3}
                            alt="Third slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Banner4}
                            alt="Third slide"
                        />


                    </Carousel.Item>

                </Carousel>
            </div>
            <br />
            <br />
        </div >
    );
};

export default Banner;