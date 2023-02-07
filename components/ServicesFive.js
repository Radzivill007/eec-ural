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

const ServicesFive = ({ title_about, img_about, btn, btnClass, show }) => {
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
                        В современном мире распространены{" "}
                        <strong>электроприводы</strong>, в которых приводным
                        устройством является асинхронный электродвигатель. Для
                        достижения плавного пуска двигателя такого типа и
                        регулирования скорости его вращения существуют
                        преобразователи частоты (ПЧ). С их помощью можно достичь
                        значительной экономии электроэнергии (до 50%) и
                        уменьшить износ механических узлов оборудования.
                        <br />
                        <br />
                        Специалисты <strong>ООО «ЭПИК»</strong> имеют богатый
                        опыт работы с электрическими приводами переменного тока
                        любых мощностей и типов нагрузки. Мы работаем с
                        преобразователями частоты передовых производителей в
                        области силовой электроники (Siemens, Danfoss, ABB,
                        OMRON, Schneider Electric, Mitsubishi, Toshiba и
                        другие).
                        <br />
                        <br />
                        <strong>Мы предлагаем следующие услуги:</strong>
                        <br />
                        <br />
                        <ul style={{ listStyleType: "disc" }}>
                          <li>
                            <strong>-</strong> Разработка проектной документации;
                          </li>
                          <br />
                          <li>
                            <strong>-</strong> Внедрение ПЧ и устройств плавного пуска на производстве;
                          </li>
                          <br />
                          <li>
                            <strong>-</strong> Пусконаладочные работы электроприводов;
                          </li>
                          <br />
                          <li>
                            <strong>-</strong> Разработка прикладного программного обеспечения;
                          </li>
                          <br />
                          <li>
                            <strong>-</strong> Диагностика неисправностей ПЧ;
                          </li>
                          <br />
                          <li>
                            <strong>-</strong> Проведение технического обслуживания;
                          </li>
                          <br />
                          <li>
                            <strong>-</strong> Составление графиков планово-предупредительных работ;
                          </li>
                          <br />
                          <li>
                            <strong>-</strong> Подбор и закуп оборудования.
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

export default ServicesFive;
