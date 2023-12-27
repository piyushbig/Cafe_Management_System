import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import "./Registration.css";

function Registration() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
        event.stopPropagation();
        // console.log(event.target.value)
    }

    setValidated(true);
  };

    return (
        <Container className='registercontainer mt-5 bg-light'>
            
        <div>
          <h1 className="text-center mb-5">Register Here!!!</h1>
        </div>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label className='label'>First name</Form.Label>
          <Form.Control
            required
            type="text"
             placeholder="First name"
            name='firstName'
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue=""
            name='lastName'
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
                    
        <Form.Group as={Col} md="6" className='mt-4' controlId="validationCustomUsername">
          <Form.Label>Email Id</Form.Label>
          <InputGroup hasValidation>
            {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
            <Form.Control
              type="email"
              placeholder="Email"
            aria-describedby="inputGroupPrepend"
            name='email'
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
                    
        <Form.Group className='mt-4' as={Col} md="6" controlId="validationCustomUsername">
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
            {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
            <Form.Control
              type="password"
              placeholder="password"
            aria-describedby="inputGroupPrepend"
                name='password'
              required
            />
            <Form.Control.Feedback type="invalid">
              Please write a password.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        </Row>
                
      <Row className="mb-3">
        <Form.Group as={Col} md="6" className='mt-3' controlId="validationCustom03">
          <Form.Label>Contact No</Form.Label>
          <Form.Control type="text" placeholder="contact"  name='contact' required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid contact.
          </Form.Control.Feedback>
        </Form.Group>
                    
        <Form.Group as={Col} md="6" className='mt-3' controlId="validationCustom04">
          <Form.Label>Street</Form.Label>
          <Form.Control type="text" as="textarea" name='streets' rows={3} placeholder="Street" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
         </Form.Group>
                    
        <Form.Group as={Col} className='mt-3' md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="city" name='city' required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
                    

        <Form.Group as={Col} className='mt-3' md="6" controlId="validationCustom05">
          <Form.Label>Pincode</Form.Label>
          <Form.Control type="text" placeholder="pincode" name='pincode' required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid pincode.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
                

      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
        </Form.Group>
                
        <div className="d-grid mt-5 gap-2 d-md-flex justify-content-md-center">
            <Button type="submit" variant="outline-success" className='px-4 py-2'>Submit form</Button>
        </div>
      </Form>
     </Container>
  );
}

export default Registration;