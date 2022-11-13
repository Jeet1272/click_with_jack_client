import React from 'react';
import Card from 'react-bootstrap/Card';

const WorkWeapon = () => {
    return (
        <div className='bg-light'>
            <h2 className='text-center text-warning my-5 pt-3'>My Work Weapon</h2>
            <div className='d-flex justify-content-evenly pb-5'>
                <Card>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqh1UhQmFVHWZGiTOnqCfCp_iuI7og-lS-9g&usqp=CAU" />
                    <Card.Body>
                        <Card.Title>Nikon D7000</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx3Qz7tpcYYLLnHipJ3hCJwqjWDcqnzbkOYA&usqp=CAU" />
                    <Card.Body>
                        <Card.Title>EOS R7</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw21pxcGWnkWmxC9bWi_Zvj91B64B_yxjMDw&usqp=CAU" />
                    <Card.Body>
                        <Card.Title>Nikon D3500</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default WorkWeapon;