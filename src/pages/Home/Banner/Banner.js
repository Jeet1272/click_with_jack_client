import React from 'react';
import Card from 'react-bootstrap/Card';


const Banner = () => {
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src="https://equinoxx.in/images/Courses-Banner/photography.jpg" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className='fs-1 text-warning mt-5 ms-5 pt-5 ps-5'>Capture Your<br></br><span className='my-5'>Priceless</span><br></br>Emotions</Card.Title>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Banner;