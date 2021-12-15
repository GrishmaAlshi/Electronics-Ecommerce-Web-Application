import React from "react";
import { Carousel } from "react-bootstrap";
import { useHistory } from "react-router";

const CarouselSlide = () => {
  const history = useHistory();
  const goToMobile = () => {
    let path = "/mobiles";
    history.push(path);
  };
  const goToLaptops = () => {
    let path = "/laptops";
    history.push(path);
  };

  return (
    <>
      <Carousel>
        <Carousel.Item onClick={goToLaptops}>
          <img
            className="d-block w-100"
            src="https://cdn.thewirecutter.com/wp-content/uploads/2020/04/laptops-lowres-2x1-.jpg?auto=webp&quality=75&crop=2:1&width=1024"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Shop for Laptops</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item onClick={goToMobile}>
          <img
            className="d-block w-100"
            src="https://assets.pandaily.com/uploads/2020/02/samsung-flagship-s20-1600x832.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Shop for Mobiles</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item onClick={goToLaptops}>
          <img
            className="d-block w-100"
            src="https://cdn.mos.cms.futurecdn.net/qBfGdkRvjJszWvRJGJfdhS.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Shop for Laptops</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default CarouselSlide;
