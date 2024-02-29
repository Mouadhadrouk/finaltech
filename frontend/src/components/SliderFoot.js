import React from "react";
import { Carousel } from "react-bootstrap";
function SliderFoot() {
  return (
    <div style={{ margin: "20px" }}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://pc-portable.net/modules/ps_imageslider/images/0d394e17ad47ad5e9b93a8bdb7418504da4b16e7_Copie%20de%20HP%206560B%20Soldes.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://pc-portable.net/modules/ps_imageslider/images/0551f2891e54f6aa836e00bb9954d2de527c7ce7_Copie%20de%20LENOVO%20L440%20soldes(2).png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://pc-portable.net/modules/ps_imageslider/images/c9b2c0620b1fcd56d5723e43c6f4ef9eae065c9c_Yes,%20they're%20all%20working.%20(1).png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SliderFoot;
