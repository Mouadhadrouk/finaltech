import React from "react";
import { Carousel } from "react-bootstrap";
function SliderHome() {
  return (
    <div style={{ margin: "20px" }}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://pc-portable.net/modules/ps_imageslider/images/d83a589e24f6d3bd8a0c96b47e8af8aa9bf53ce8_BANNIERES%20(3).png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://pc-portable.net/modules/ps_imageslider/images/6b38bd1664092f443fd91d6d1343a95016d45f89_HP%20Probook%20650%20G1.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/584735_a5ddcdaa-4df1-452e-91fe-b5baedd07798.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SliderHome;
