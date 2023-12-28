import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UpdateFoodDetails from './updateFoodDetails/UpdateFoodDetails';
import UploadImage from './uploadImage/UploadImage';
import CarouselImage from './carouselImage/CarouselImage';

function UpdateDetails() {
  return (
    <div>
      <Row>
              <Col xs={3}>
                <CarouselImage />
              </Col>
              


              <Col xs={6}>
                  <UpdateFoodDetails />
              </Col>
              


        <Col xs={3}>
          <UploadImage />
        </Col>
              

      </Row>
     
    </div>
  );
}

export default UpdateDetails;