import React from "react";
import vendor from "../../public/assets/images/about/vendor.jpg";
import { Container, Row, Col, Input, Form } from "reactstrap";
import {
  svgLowCost,
  svgHighGrowth,
  svgPickUp,
  svgApproach,
} from "../../services/script";

const FeatureData = [
  {
    img: svgLowCost,
    title: "оптимальные цены",
    desc: "Постоянно анализируем рынок и предлагаем лучшее соотношение цены и качества. ",
  },
  {
    img: svgHighGrowth,
    title: "гарантия 1 год",
    desc: "Все наши сотрудники имеют профильное высшее образование и большой опыт за плечами. ",
  },
  {
    img: svgPickUp,
    title: "быстрый выезд",
    desc: "Одни из самых быстрых сроков от заключения договора до первого выезда на объект по рынку. ",
  },
  {
    img: svgApproach,
    title: "договор",
    desc: "Работаем по договору, который подкрепляет наши обязательства перед клиентами. ",
  },
];

const FeatureComponent = ({ img, title, desc }) => {
  return (
    <Col lg="3" md="6" className="service-block1">
      <div dangerouslySetInnerHTML={{ __html: img }}></div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </Col>
  );
};

const BecomeNew = () => {
  return (
    <>
      {/* // <!-- service section start --> */}
      <Container>
        <section className="service section-b-space">
          <Row className="partition4 ">
            {FeatureData.map((feature, i) => {
              return (
                <FeatureComponent
                  key={i}
                  img={feature.img}
                  title={feature.title}
                  desc={feature.desc}
                />
              );
            })}
          </Row>
        </section>
      </Container>
      {/* // <!-- service section end --> */}

      {/* <!-- how to start section start --> */}
      {/* <section className="section-b-space become-vendor">
        <Container>
          <h4>Основные этапы сделки:</h4>
          <div className="step-bg">
            <Row>
              {BannerData.map((banner, i) => {
                return (
                  <BannerComponent
                    key={i}
                    no={banner.no}
                    title={banner.title}
                    desc={banner.desc}
                  />
                );
              })}
            </Row>
          </div>
        </Container>
      </section> */}
      {/* <!-- how to start section end --> */}

      {/* <!-- start selling section start --> */}
      {/* <section className="start-selling section-b-space">
        <Container>
          <Col>
            <div>
              <h4>start selling</h4>
              <p>
                Multikart marketplace is India’s leading platform for selling
                online. Be it a manufacturer, vendor or supplier, simply sell
                your products online on Multikart and become a top ecommerce
                player with minimum investment. Through a team of experts
                offering exclusive seller workshops, training, seller support
                and convenient seller portal, Multikart focuses on educating and
                empowering sellers across India. Selling on Multikart.com is
                easy and absolutely free. All you need is to register, list your
                catalogue and start selling your products.
              </p>
              <Form>
                <Row>
                  <Col sm="6">
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="Email ID"
                    />
                  </Col>
                  <Col sm="6">
                    <Input
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </Col>
                </Row>
              </Form>
              <a href="#" className="btn btn-solid btn-sm">
                start selling
              </a>
            </div>
          </Col>
        </Container>
      </section> */}
      {/* <!-- start selling section end --> */}
    </>
  );
};

export default BecomeNew;
