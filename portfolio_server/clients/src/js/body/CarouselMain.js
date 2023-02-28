import Carousel from 'react-bootstrap/Carousel';

import carousel_image_1 from "../../png/Carousel_1.png";
import carousel_image_2 from "../../png/Carousel_2.png";
import carousel_image_3 from "../../png/Carousel_3.png";

function CarouselMain() {

  return (
    <Carousel>
      <Carousel.Item>
        <img
          style={{ height: "500px" }}
          className="d-block w-100"
          src={carousel_image_1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>게임</h3>
          <p>인디 게임 개발의 과정을 담은 일지들</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "500px" }}
          className="d-block w-100"
          src={carousel_image_2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>웹</h3>
          <p>웹 개발의 결과물들</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "500px" }}
          className="d-block w-100"
          src={carousel_image_3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>부록</h3>
          <p>
            github, itch, 레퍼런스
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselMain;