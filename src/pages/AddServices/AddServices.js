import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import useTitle from '../../hooks/useTitle';

const AddServices = () => {
    useTitle('Add Service')

    const handleServices = (event) => {
        event.preventDefault()
        const form = event.target
        const title = form.title.value;
        const img = form.img.value;
        const price = form.price.value;
        const details = form.details.value;

        const service = { title, img, price, details }
        console.log(service)

        fetch('https://click-with-jack-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Service added successfully')
                    form.reset()
                }

            })
    }


    return (
        <form onSubmit={handleServices} className='w-50 mx-auto my-5'>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Service Name</InputGroup.Text>
                <Form.Control
                    name="title"
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
                <Form.Control id="basic-url" name="img" aria-describedby="basic-addon3" />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control aria-label="Amount (to the nearest dollar)" name="price" />
                <InputGroup.Text>Price</InputGroup.Text>
            </InputGroup>

            <InputGroup>
                <InputGroup.Text>Details</InputGroup.Text>
                <Form.Control as="textarea" aria-label="With textarea" name="details" />
            </InputGroup>
            <Button className='mt-3' variant="info" type="submit">Add Service</Button>
        </form>
    );
};

export default AddServices;