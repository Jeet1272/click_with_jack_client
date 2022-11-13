import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import useTitle from '../../hooks/useTitle';


const Login = () => {
    const { userSignIn, googleSignIn, githubSignIn } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()

    useTitle('Log In')

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userSignIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
            })
            .catch(err => console.error(err))
    }

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.error(err))
    }

    const handleGithubSignIn = () => {
        githubSignIn(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='d-flex'>
            <Form onSubmit={handleSignIn} className='w-50 bg-warning p-5 m-5'>
                <h2 className='text-center'>Log In</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button> <br></br>
                <small>Haven't any account, please <Link to='/register'>Register</Link></small>
            </Form>
            <div className="d-grid gap-4 w-25 m-auto">
                <h3 className='text-center'>Log in with:</h3>
                <Button onClick={handleGithubSignIn} variant="primary" size="md">
                    <Link className='text-white text-decoration-none'>Github</Link>
                </Button>
                <Button onClick={handleGoogleSignIn} variant="secondary" size="md">
                    <Link className='text-white text-decoration-none'> Google</Link>
                </Button>
            </div>
        </div>
    );
};

export default Login;