import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./UpdateFoodDetails.css";


const UpdateFoodDetails = () => {
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
    <div className='updatecontainer mt-5 bg-light'>
            
        <div>
          <h2 className="text-center text-primary font-weight-bold pt-4 mb-5">Update Details</h2>
        </div>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3 g-3">
        <Form.Group as={Col} md="6" className='mt-3' controlId="validationCustom03">
          <Form.Label className='fw-bold'>Food Title</Form.Label>
          <Form.Control type="text" placeholder="burger"  name='contact' required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid contact.
          </Form.Control.Feedback>
        </Form.Group>
                    
        <Form.Group as={Col} md="6" className='mt-3' controlId="validationCustom04">
          <Form.Label className='fw-bold'>Food Description</Form.Label>
                      <Form.Control type="text" as="textarea" name='streets' rows={2} cols={5} placeholder="Best cafe" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
         </Form.Group>
                    
        <Form.Group as={Col} className='mt-3' md="6" controlId="validationCustom03">
          <Form.Label className='fw-bold'>Category</Form.Label>
          <Form.Control type="text" placeholder="select category" name='city' required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
                    

        <Form.Group as={Col} className='mt-3' md="6" controlId="validationCustom05">
          <Form.Label className='fw-bold'>Food Price</Form.Label>
          <Form.Control type="text" placeholder="250" name='pincode' required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid pincode.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>               

                
        <div className="d-grid mt-5 gap-2 d-md-flex justify-content-md-center">
            <Button type="submit" variant="danger" className='px-4 py-2'>Submit form</Button>
        </div>
      </Form>
     </div>
  )
}

export default UpdateFoodDetails