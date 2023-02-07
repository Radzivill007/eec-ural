import React, { Fragment } from "react";
import { Container, Row, Col, Media } from "reactstrap";
// import aboutUs from "../public/assets/images/about/about-us.jpg";
import { svgFreeShipping, svgoffer, svgservice } from "../services/script";
import MyModal from "./component/MyModal";
import Link from "next/link";
import banner1 from "../public/assets/images/banner-uslugi/banner1.jpg";
import banner2 from "../public/assets/images/banner-uslugi/banner2.jpg";
import banner3 from "../public/assets/images/banner-uslugi/banner3.jpg";
import banner4 from "../public/assets/images/banner-uslugi/banner4.jpg";

const Data = [
  { link: svgFreeShipping, title: "free shipping" },
  { link: svgservice, title: "24 X 7 service" },
  { link: svgoffer, title: "festival offer" },
];

const DataBanner = [
  {
    img: banner1,
    title: "Преобразователи частоты",
    classes: "p-left service-block-mobile",
  },
  {
    img: banner2,
    title: "Программируемые логические контроллеры ПЛК",
    classes: "p-left service-block-mobile",
  },
  {
    img: banner3,
    title: "Устройства КИП и А",
    classes: "p-left service-block-mobile",
  },
  {
    img: banner4,
    title: "Коммутационное оборудование",
    classes: "p-left service-block-mobile",
  },
];

const ServiceSection = ({ link, title }) => {
  return (
    <Col sm="4" className="service-block1">
      <div dangerouslySetInnerHTML={{ __html: link }} />
      <h5>{title}</h5>
    </Col>
  );
};

const ServicesTwo = ({ title_about, img_about, btn, btnClass, show }) => {
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
                        Мы производим дефектовку оборудования с выявлением
                        возможных причин неисправностей и их последующим
                        устранением. При необходимости произведём подбор и закуп
                        оборудования, взамен вышедшего из строя. Вы всегда
                        можете обратиться к нам, если в работе вашего
                        оборудования происходят сбои или наблюдается его
                        некорректная работа.
                      </span>
                      <br />
                      <br />
                      Также рекомендуем ознакомиться:
                      <br />
                      <Link href="/uslugi/puskonaladochnye-raboty-proizvodstvennogo-jelektrooborudovanija">
                        Пусконаладочные работы производственного
                        электрооборудования
                      </Link>
                      <br />
                      <br />
                      <div className="additional-text">
                        <div className="additional-text__warning">⚠️</div>
                        <div className="additional-text__text">Несвоевременное устранение недочетов в работе
                        оборудования может привести к дорогостоящему ремонту или
                        его полной замене.</div>
                      </div>
                    </p>
                  </div>
                    <Row className="partition3">
                      {DataBanner.map((data, i) => {
                        return (
                          <Col md="5">
                            <div className={`collection-banner ${data.classes}`}>
                              <div className="img-part">
                                <Media
                                  src={data.img}
                                  className="img-fluid blur-up lazyload bg-img"
                                  alt=""
                                />
                              </div>
                              <div className="contain-banner banner-3 banner-font">
                                <div>
                                  <h2 className="banner-font">{data.title}</h2>
                                </div>
                              </div>
                            </div>
                          </Col>
                        );
                      })}
                    </Row>
                  <MyModal
                    btnStyle={{ marginTop: "16px" }}
                    btnClass="btn btn-solid"
                    btnText="Узнать цену"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default ServicesTwo;
