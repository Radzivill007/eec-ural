import React, { Fragment } from "react";
import { Container, Row, Col, Media } from "reactstrap";
import { svgFreeShipping, svgoffer, svgservice } from "../services/script";
import MyModal from "./component/MyModal";

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

const ServicesSix = ({ title_about, img_about, btn, btnClass, show }) => {
  return (
    <Fragment>
      <section className="beauty-about">
        <Container>
          <Row>
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
                        Позвоните нам или оставьте заявку на другие виды работ,
                        и наш менеджер свяжется с Вами в ближайшее время!
                      </span>
                      <br />
                      <br />
                      <strong>Телефон: +7 932 115 90 00</strong>
                      <br />
                      <strong>Почта: info@eec-ural.ru</strong>
                    </p>
                    <MyModal btnStyle={{ marginTop: "16px" }} btnClass="btn btn-solid" btnText="Узнать цену"/>
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

export default ServicesSix;
