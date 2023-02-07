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

const ServicesThree = ({ title_about, img_about, btn, btnClass, show }) => {
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
                        <strong>
                          Автоматизированные системы управления технологическими
                          процессами (АСУ ТП)
                        </strong>{" "}
                        – комплексное решение, обеспечивающее автоматизацию
                        основных технологических операций на производстве в
                        целом или каком-то его участке.
                        <br />
                        <br />
                        Применение АСУ позволяет осуществлять контроль любых
                        технологических процессов и оборудования на предприятии,
                        сократить количество брака выпускаемой продукции, а
                        также снизить влияние человеческого фактора на
                        технологический процесс.
                        <br />
                        <br />
                        <strong>
                          Наши специалисты проводят комплекс работ по
                          автоматизации промышленных предприятий с применением
                          современных решений в области АСУ ТП:
                        </strong>
                      </span>
                      <br />
                      <br />
                      <ul style={{ listStyleType: "disc" }}>
                        <li>
                          <strong>-</strong> Предпроектное обследование
                          технологического оборудования (процесса) как объекта
                          автоматизации;
                        </li>
                        <li>
                          <strong>-</strong> Разработку технического задания на
                          создание и внедрение АСУ ТП;
                        </li>
                        <br />
                        <li>
                          <strong>-</strong> Разработку проектной документации в
                          соответствии с РД 50-34.698-90 (автоматизированные
                          системы - требования к содержанию документов);
                        </li>
                        <br />
                        <li>
                          <strong>-</strong> Разработку прикладного программного
                          обеспечения;
                        </li>
                        <br />
                        <li>
                          <strong>-</strong> Экспертизу и согласование проекта;
                        </li>
                        <br />
                        <li>
                          <strong>-</strong> Монтажные работы;
                        </li>
                        <br />
                        <li>
                          <strong>-</strong> Пусконаладочные работы;
                        </li>
                        <br />
                        <li>
                          <strong>-</strong> Ревизию существующих измерительных
                          датчиков и исполнительных механизмов.
                        </li>
                      </ul>
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

export default ServicesThree;
