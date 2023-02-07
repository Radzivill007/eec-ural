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

const SevicesOne = ({ title_about, img_about, btn, btnClass, show }) => {
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
                        <strong>Пусконаладочные работы (ПНР)</strong>{" "}
                        представляют собой процесс последовательных и
                        взаимосвязанных мероприятий, обеспечивающих качественный
                        и своевременный ввод в эксплуатацию оборудования
                        пускового комплекса в соответствии с проектной, рабочей
                        и заводской документацией.
                      </span>
                      <br />
                      <br />
                      <span>
                        <strong>
                          Работы по пусконаладке включают в себя следующие
                          этапы:
                        </strong>
                        <br />
                        <ul style={{ listStyleType: "disc" }}>
                          <li>
                            <strong>-</strong> Проверка правильности монтажа
                            (шефмонтаж);
                          </li>
                          <br />
                          <li>
                            <strong>-</strong> Испытание аварийных блокировок;
                          </li>
                          <br />
                          <li>
                            <strong>-</strong> Тестирование рабочих систем;
                          </li>
                          <br />
                          <li>
                            <strong>-</strong> Настройка проектных параметров
                            оборудования;
                          </li>
                          <br />
                          <li>
                            <strong>-</strong> Комплексное тестирование под
                            разной нагрузкой;
                          </li>
                          <br />
                          <li>
                            <strong>-</strong> Проведение мастер-класса для
                            персонала;
                          </li>
                          <br />
                          <li>
                            <strong>-</strong> Сдача оборудования и работ.
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

export default SevicesOne;
