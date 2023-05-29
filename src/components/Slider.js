
import Carousel from 'react-bootstrap/Carousel';


function Slider() {
  return ( 
    <div className='slider'>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/shutterstock_2136072167.png"
          alt="Zero slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/shutterstock_2190359029.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/shutterstock_2145719215.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/shutterstock_2153526111.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>    
        
  );
}


export default Slider;