import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel className='shadow'>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          style={{maxHeight:"500px"}}
          src="/images/slider1.jpeg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          style={{maxHeight:"500px"}}
          src="/images/slider2.jpeg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          style={{maxHeight:"500px"}}
          src="/images/slider3.jpeg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          style={{maxHeight:"500px"}}
          src="/images/slider4.jpeg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          style={{maxHeight:"500px"}}
          src="/images/slider5.jpeg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          style={{maxHeight:"500px"}}
          src="/images/slider6.jpeg"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;