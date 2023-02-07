import React from "react";
import Slider from "react-slick";
import { Slider5 } from "../services/script";
import { Container, Row, Media, Col } from "reactstrap";
import ImageGallery from "react-image-gallery";

const DiplomaBlock = () => {
  const imgData = [
    "/assets/images/diploma-slider/diploma_1.jpg",
    "/assets/images/diploma-slider/diploma_2.jpg",
    "/assets/images/diploma-slider/diploma_3.jpg",
    "/assets/images/diploma-slider/diploma_4.jpg",
  ];
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={`/assets/images/diploma-slider/diploma_${i + 1}.jpg`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-thumb slick-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const images = [
    {
      original: "/assets/images/diploma-slider/diploma_2.jpg",
      thumbnail: "/assets/images/diploma-slider/diploma_2.jpg",
    },
    {
      original: "/assets/images/diploma-slider/diploma_3.jpg",
      thumbnail: "/assets/images/diploma-slider/diploma_3.jpg",
    },
    {
      original: "/assets/images/diploma-slider/diploma_1.jpg",
      thumbnail: "/assets/images/diploma-slider/diploma_1.jpg",
    },
    {
      original: "/assets/images/diploma-slider/diploma_4.jpg",
      thumbnail: "/assets/images/diploma-slider/diploma_4.jpg",
    },
  ];
  return (
    <section style={{ paddingTop: "70px" }}>
      <Container>
        <Row>
          <Col md="12">
            <div className="title1">
              <h2 className="title-inner1">
                Дипломы и регалии наших сотрудников
              </h2>
              <div className="line" />
            </div>
            <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false}/>
            {/* <Slider {...settings}>
              <div>
                <img style={{ width: "30%" }} src={"/assets/images/diploma-slider/diploma_1.jpg"} />
              </div>
              <div>
                <img style={{ width: "30%" }} src={"/assets/images/diploma-slider/diploma_2.jpg"} />
              </div>
              <div>
                <img style={{ width: "30%" }} src={"/assets/images/diploma-slider/diploma_3.jpg"} />
              </div>
              <div>
                <img style={{ width: "30%" }} src={"/assets/images/diploma-slider/diploma_4.jpg"} />
              </div>
            </Slider> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DiplomaBlock;
