import React from "react";
import {Carousel} from "react-bootstrap";


const CarouselSlide = () => {
    return(
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.thewirecutter.com/wp-content/uploads/2020/04/laptops-lowres-2x1-.jpg?auto=webp&quality=75&crop=2:1&width=1024"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-fridges-2019-1569421093.png?crop=0.730xw:0.599xh;0.134xw,0.0989xh&resize=1200:*"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-best-tv-brands-1587581394.png?crop=0.853xw:0.657xh;0.0733xw,0.165xh&resize=1200:*"
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>

        </>
    );
}
export default CarouselSlide;