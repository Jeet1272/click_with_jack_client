import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className='d-flex'>
            <Form className='w-50 bg-warning p-5 m-5'>
                <h2 className='text-center'>Log In</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button> <br></br>
                <small>Haven't any account, please <Link to='/register'>Register</Link></small>
            </Form>
            <div className="d-grid gap-4 w-25 m-auto">
                <h3 className='text-center'>Log in with:</h3>
                <Button variant="primary" size="md">
                    Github
                </Button>
                <Button variant="secondary" size="md">
                    Google
                </Button>
            </div>
        </div>
    );
};

export default Login;