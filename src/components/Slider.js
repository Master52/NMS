
import {
  Carousel 
}from "react-bootstrap";



const Slider = (props) => {

  return (
    <div>
        <Carousel>
          {
            props.items.map(item=> 
              (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={item.img}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
            ))
          }
        </Carousel>
    </div>

  )

};


export default Slider;

