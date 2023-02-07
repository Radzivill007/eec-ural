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

const AboutCompany = ({ title_about, img_about }) => {
  return (
    <Fragment>
      <section className="beauty-about">
        <Container>
          <Row>
            {/* <Col xl="5" lg="6" md="12" className="offset-xl-1 text-center">
              <Media
                src={img_about}
                alt=""
                className="img-fluid blur-up lazyload"
              />
            </Col> */}
            <Col xl="12" lg="12" md="12">
              <div className="about-section">
                <div>
                  <div className="title1">
                    <h2 className="title-inner1">{title_about}</h2>
                    <div className="line" />
                  </div>
                  <Media
                    src={img_about}
                    alt=""
                    className="img-fluid blur-up lazyload img-services"
                  />
                  <div style={{ paddingTop: "20px" }} className="about-text">
                    <p>
                      <span>
                        <strong>
                          ООО &laquo;Электропромышленная инженерная
                          компания&raquo;
                        </strong>{" "}
                        предоставляет услуги по электротехническим работам в
                        Свердловской области.
                        <br />
                        <br />В нашей компании работают высококвалифицированные
                        инженеры с многолетним стажем работы на различных
                        промышленных предприятиях, в том числе и в странах СНГ.
                        <br />
                        <br />
                        Качественное проведение работ, выполненное в кратчайшие
                        сроки и с минимальными затратами для заказчика &ndash;
                        важнейшая цель нашей компании.
                      </span>
                    </p>
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

export default AboutCompany;
