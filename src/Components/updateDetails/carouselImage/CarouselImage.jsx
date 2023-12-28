import Carousel from 'react-bootstrap/Carousel';

import burger from "../../../images/download.jpeg"
import burger2 from "../../../images/download2.jpeg"
import coffee from "../../../images/download3.jpeg"
import "./Carousel.css";

function CarouselImage() {
  return (
    <div className='carousel m-4 mt-5'>
    <Carousel className='h-5'>
      <Carousel.Item className='image'>          
          <img
          
          src={burger}
            alt="First slide" 
            className="d-block w-100"                      
        />
        
      </Carousel.Item>
      <Carousel.Item className='image'>
           <img           
            className="d-block w-100"
          src={burger2}
            alt="First slide"                      
        />
        
      </Carousel.Item>
      <Carousel.Item className='image'>
           <img            
            className="d-block w-100"
          src={coffee}
            alt="First slide"                    
        />
        
      </Carousel.Item>
      </Carousel>
      </div>
  );
}

export default CarouselImage;