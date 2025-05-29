import { colors } from '@mui/material';
import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';

function MyFormData () {
    const [formInfo, setFormInfo ] = useState ({
        name: '',
        surname: '',
        age: '',
        course: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInfo(prev => ({
          ...prev,
          [name]: value,
        }));
      };
    
      const validate = () => {
        const newErrors = {};

        if (!formInfo.name.trim()){
            newErrors.name = 'Name is required';
        }

        if (!formInfo.surname.trim()){
            newErrors.surname = 'Surname is required';
        }

        if (!formInfo.age.trim()){
            newErrors.age = 'Age is required';
        }

        if (!formInfo.course.trim()){
            newErrors.course = 'Course is required';
        }

        if (!formInfo.email.trim()){
            newErrors.email = 'Email is required';
        } else if 
        (!/\S+@\S+\.\S+/.test(formInfo.email)){
            newErrors.email = 'Email is invalid'
        }

        if (!formInfo.message.trim()){
            newErrors.message = 'Message is required';
        }
        return newErrors;
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if(Object.keys(validationErrors).length === 0){
            console.log('Form submitted:', formInfo);
            setSubmitted(true);
        }else {
            setSubmitted(false);
        }
        
      };

    return(
        <Container className="mt-5"  style={{ maxWidth: '500px', backgroundColor: "darkcyan", marginTop: '50px', padding: '20px'}}>
            <h2>My form</h2>
            {submitted && <Alert variant="Sucess">Form Submitted Successfully</Alert>}
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formInfo.name}
                    onChange={handleChange}
                    required
                    isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.name}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSurname">
                <Form.Label>Surname:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your surname"
                    name="surname"
                    value={formInfo.surname}
                    onChange={handleChange}
                    required
                    isInvalid={!!errors.surname}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.surname}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAge">
                <Form.Label>Age:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your age"
                    name="age"
                    value={formInfo.age}
                    onChange={handleChange}
                    required
                    isInvalid={!!errors.age}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.age}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="form
            course">
                <Form.Label>Course:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your course"
                    name="course"
                    value={formInfo.course}
                    onChange={handleChange}
                    required
                    isInvalid={!!errors.course}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.course}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formInfo.email}
                    onChange={handleChange}
                    required
                    isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.email}
                </Form.Control.Feedback>
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Message: </Form.Label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    cols="40"
                    placeholder="Type your message here..."
                />
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message:</Form.Label>
                <Form.Control
                    as={'textarea'}
                    rows={3}
                    placeholder="Your message"
                    name="message"
                    value={formInfo.message}
                    onChange={handleChange}
                    isInvalid={!!errors.message}
                    />
                    <Form.Control.Feedback type="invalid">
                    {errors.message}
                </Form.Control.Feedback>
            </Form.Group>
            <br />
            <Button variant="primary" type='submit'style={{color: 'white', textAlign: 'center', marginBottom: '20px'

            }} >
                Submit
            </Button>

            <br />
            </Form>
            <br/>
        </Container>
    )
}

export default MyFormData