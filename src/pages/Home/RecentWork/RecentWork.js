import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const RecentWork = () => {
    return (
        <div>
            <h1 className='text-center text-warning mb-5'>My Recent Work</h1>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-75 mx-auto"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Oz0Wz17edEgAoenRSQxKXMjIN2t6DGdfuQ&usqp=CAU"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-75 mx-auto"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDTEA7o0CiPXBCpaJX-iiFqwu4TypYixRIg&usqp=CAU"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-75 mx-auto"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8r6wAGVH1rnbipowxdSgVtgYqC9GeO1EoZQ&usqp=CAU"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-75 mx-auto"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk86YKm-Lc5VxmFg-qbEZFjXbC-U67zqXflQ&usqp=CAU"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default RecentWork;