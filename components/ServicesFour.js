import React, { Fragment } from "react";
import { Container, Row, Col, Media } from "reactstrap";
// import aboutUs from "../public/assets/images/about/about-us.jpg";
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

const ServicesFour = ({ title_about, img_about, btn, btnClass, show }) => {
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
                    // style={{ float: "none" }}
                  />
                  <div style={{ paddingTop: "20px" }} className="about-text">
                    <p>
                      <span>
                        <strong>
                          Наши специалисты имеют богатый опыт в области
                          комплексной наладки и устранения неисправностей линий
                          профилирования тонколистового металла и выполняют
                          следующие услуги:
                        </strong>
                        <br />
                        <br />
                        <ul style={{ listStyleType: "disc" }}>
                          <li>
                            <strong>-</strong> Наладка профилирующего
                            инструмента (составление
                            <br />
                            карты зазоров);
                          </li>
                          <br />
                          <li>
                            <strong>-</strong> Наладка шкафов управления линий и
                            рулоноразматывателей;
                          </li>
                          <br />
                          <li>
                            <strong>-</strong> Диагностика и ремонт систем
                            управления (силовая
                            <br />
                            часть и КИПиА);
                          </li>
                          <br />
                          <li>
                            <strong>-</strong> Выявление и устранение
                            неисправностей, приводящих к браку выпускаемой
                            продукции;
                          </li>
                          <br />
                          <li>
                            <strong>-</strong> Составление графиков ППР;
                          </li>
                          <br />
                          <li>
                            <strong>-</strong> Проведение ТО.
                          </li>
                        </ul>
                        <br />
                        <strong>Работаем с линиями по производству:</strong>
                        <br />
                        <br />
                        <ul style={{ listStyleType: "disc" }}>
                          <li>
                            <strong>-</strong> Профилированных листов;
                          </li>
                          <br />
                          <li>
                            <strong>-</strong> Сайдингов;
                          </li>
                          <br />
                          <li>
                            <strong>-</strong> Штакетников;
                          </li>
                          <br />
                          <li>
                            <strong>-</strong> Водосточных систем;
                          </li>
                          <br />
                          <li>
                            <strong>-</strong> Металлочерепиц;
                          </li>
                          <br />
                          <li>
                            <strong>-</strong> Трёхслойных сендвич-панелей.
                          </li>
                        </ul>
                      </span>
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

export default ServicesFour;
