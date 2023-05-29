import Carousel from "react-bootstrap/Carousel";

function Slider1Block() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block"
          src="images/Photo (5).png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="images/Photo (6).png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="images/Photo (7).png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="images/Photo (7).png"
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="images/Photo (7).png"
          alt="Fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="images/Photo (7).png"
          alt="Sixth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
export default Slider1Block;
