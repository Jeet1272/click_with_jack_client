import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-dark p-5'>
            <div className='d-flex mx-5'>
                <div className='d-grid text-center w-50'>
                    <Link to='/'>About us</Link><br></br>
                    <Link to='/'>Contact us</Link><br></br>
                    <Link to='/'>FAQ</Link><br></br>
                </div>
                <div className='d-grid text-center w-50'>
                    <Link to='/'>Service</Link>
                    <Link to='/'>Service</Link>
                    <Link to='/'>Service</Link>
                </div>

            </div>
            <p className='text-center text-white'>@copyright reserved by Jack</p>
        </div>
    );
};

export default Footer;