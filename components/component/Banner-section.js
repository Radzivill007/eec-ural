import React, { Fragment, useState } from "react";
import { Container, Row, Col, Media, Modal, Button } from "reactstrap";
import banner4 from "../../public/assets/images/marijuana/banner/4.jpg";
import banner2 from "../../public/assets/images/marijuana/banner/2.jpg";

const data = [
  {
    img: banner4,
    title: "50% off",
    desc: "oils",
    link: "#",
    classes: "",
  },
  {
    img: "",
    classes: "p-right text-center",
    link: "#",
  },
];

const BannerSection = () => {
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <section className="p-t-0 section-b-space ratio_45">
        <Container>
          <Row className="partition2">
            {data.map((data, i) => {
              return (
                <Col md="6">
                  <a href={data.link}>
                    <div className={`collection-banner ${data.classes}`}>
                      <div className="img-part">
                        <Media
                          src={data.img}
                          className="img-fluid blur-up lazyload bg-img"
                          alt=""
                        />
                      </div>
                    </div>
                  </a>
                </Col>
              );
            })}
            <Button variant="primary" onClick={() => setShow(true)}>
              Launch demo modal
            </Button>

            <div className={show ? "mymodal showmodal" : "mymodal"}>
              <div className={show ? "showmodalinner" : ""}>
                <div className="close" onClick={() => setShow(false)} />
                <p>
                  Оставьте контакты, а наш <br /> менеджер свяжется с Вами
                </p>
                <input type="text" placeholder="Введите ФИО" />
                <input type="email" placeholder="Введите E-mail" />
                <input type="tel" placeholder="+7(___)___-__-__" />
                <input
                  type="text"
                  placeholder="Введите регион или город работы"
                />
                <label className="label-checkbox">
                  <input type="checkbox" value="1" />
                  <span>
                    <p>
                      Я согласен с &nbsp;
                      <a href="#" target="_blank">
                        Политикой конфидициальности
                      </a>{" "}
                    </p>
                  </span>
                </label>
                <Button type="submit">ОСТАВИТЬ ЗАЯВКУ</Button>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};
export default BannerSection;
