import React from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import "./UploadImage.css";
import { MDBFile } from 'mdb-react-ui-kit';

const UploadImage = () => {
  return (
       <div className='imgcontainer mt-5 bg-light'>
            
        <div>
          <h2 className="text-center text-primary font-weight-bold pt-4 mb-5">Update Images</h2>
        </div>
    
      <Row className="mb-3">
        <MDBFile label='Select 1st Image' id='customFile' />
        <MDBFile label='Select 1st Image' id='customFile' />
        <MDBFile label='Select 1st Image' id='customFile' />
        </Row>               

                
        <div className="d-grid mt-4 gap-2 d-md-flex justify-content-md-center">
            <Button type="submit" variant="danger" className='px-4 py-2'>Submit form</Button>
        </div>
      
     </div>
  )
}

export default UploadImage