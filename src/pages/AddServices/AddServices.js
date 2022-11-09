import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const AddServices = () => {




    return (
        <form className='w-50 mx-auto my-5'>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Service Name</InputGroup.Text>
                <Form.Control
                    placeholder="Service name"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>

            <Form.Label htmlFor="basic-url">Image URL</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon3">
                    https://example.com/users/
                </InputGroup.Text>
                <Form.Control id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Text>Price</InputGroup.Text>
            </InputGroup>

            <InputGroup>
                <InputGroup.Text>Details</InputGroup.Text>
                <Form.Control as="textarea" aria-label="With textarea" />
            </InputGroup>
        </form>
    );
};

export default AddServices;