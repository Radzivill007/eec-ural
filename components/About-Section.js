import React, { Fragment } from "react";
import { Container, Row, Col, Media } from "reactstrap";
// import aboutUs from "../public/assets/images/about/about-us.jpg";
import { svgFreeShipping, svgoffer, svgservice } from "../services/script";

const Data = [
  { link: svgFreeShipping, title: "free shipping" },
  { link: svgservice, title: "24 X 7 service" },
  { link: svgoffer, title: "festival offer" },
];

const ServiceSection = ({ link, title }) => {
  return (
    <Col sm="4" className="service-block1">
      <div dangerouslySetInnerHTML={{ __html: link }} />
      <h5>{title}</h5>
    </Col>
  );
};

const AboutSection = ({ title_about, description_about, img_about }) => {
  return (
    <Fragment>
      <section className="beauty-about">
        <Container>
          <Row>
            <Col xl="5" lg="6" md="12" className="offset-xl-1 text-center">
              <Media
                src={img_about}
                alt=""
                className="img-fluid blur-up lazyload"
              />
            </Col>
            <Col xl="5" lg="6" md="12">
              <div className="about-section">
                <div>
                  <h2>{title_about}</h2>
                  <div className="about-text">
                    <p>{description_about}</p>
                  </div>
                  {/* <ServiceLayout /> */}
                  <div className="service small-section pb-0">
                    {/* <Row>
                      {Data.map((data, i) => {
                        return (
                          <ServiceSection
                            key={i}
                            link={data.link}
                            title={data.title}
                          />
                        );
                      })}
                    </Row> */}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default AboutSection;
