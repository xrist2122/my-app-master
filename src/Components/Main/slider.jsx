import "./slider.css"
import Carousel from 'react-bootstrap/Carousel';
function slider() {
  

  return<div className='jopa'><Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/img/98339ad95bd5c161de32345f7ff555a4 1.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/img/98339ad95bd5c161de32345f7ff555a4 1.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/img/98339ad95bd5c161de32345f7ff555a4 1.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel></div>
  
    
  ;

}

export default slider;
