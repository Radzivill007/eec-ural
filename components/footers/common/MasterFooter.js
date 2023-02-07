import React, { useEffect, useState } from "react";
import Link from "next/link";
import InputMask from "react-input-mask";
import emailjs from "emailjs-com";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  Collapse,
} from "reactstrap";
import LogoImage from "../../headers/common/logo";
import CopyRight from "./copyright";
import { YMInitializer } from 'react-yandex-metrika';


const MasterFooter = ({
  containerFluid,
  logoName,
  layoutClass,
  footerClass,
  footerLayOut,
  footerSection,
  belowSection,
  belowContainerFluid,
  copyRightFluid,
  newLatter,
  show,
}) => {
  const [isOpen, setIsOpen] = useState();
  const [collapse, setCollapse] = useState(0);
  const width = window.innerWidth < 750;
  const [showAlert, setShowAlert] = React.useState(false);
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_brn1eel",
        "template_un2ql5r",
        e.target,
        "user_eoS7mUZ09qO1Rc4fi9PX5"
      )
      .then(
        (result) => {
          setShowAlert(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  useEffect(() => {
    const changeCollapse = () => {
      if (window.innerWidth < 750) {
        setCollapse(0);
        setIsOpen(false);
      } else setIsOpen(true);
    };

    window.addEventListener("resize", changeCollapse);

    return () => {
      window.removeEventListener("resize", changeCollapse);
    };
  }, []);
  return (
    <div>
      <div className={show || showAlert ? "blur" : ""} />
      <footer className={footerClass}>
        {newLatter ? (
          <div className={footerLayOut}>
            <Container fluid={containerFluid ? containerFluid : ""}>
              <section className={footerSection}>
                <Row>
                  <Col lg="6">
                    <div className="subscribe">
                      <div>
                        <h4>Остались вопросы?</h4>
                        <p>Наш специалист свяжется с вами в ближайшее время.</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg="6" style={{ textAlign: "center" }}>
                    <Form
                      onSubmit={sendEmail}
                      className="form-inline subscribe-form"
                    >
                      <FormGroup className="mx-sm-3">
                        <InputMask
                          type="tel"
                          name="phone"
                          maskPlaceholder="Введите номер телефона"
                          className="form-control"
                          mask="+9(999)999-99-99"
                          defaultValue="+7 (___) ___-__-__"
                          maskChar="_"
                          required
                          style={{ fontSize: "1.2rem" }}
                        />
                        {/* <Input
                          type="tel"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Введите номер телефона"
                        /> */}
                      </FormGroup>
                      <Button type="submit" className="btn btn-solid">
                        перезвонить
                      </Button>
                    </Form>
                  </Col>
                </Row>
                <div className={`spasibo ${showAlert ? "show" : ""}`}>
                  <div className="close" onClick={() => setShowAlert(false)} />
                  <p>Ваша заявка успешно отправлена, Спасибо!</p>
                </div>
              </section>
            </Container>
          </div>
        ) : (
          ""
        )}

        <section className={belowSection}>
          <Container fluid={belowContainerFluid ? belowContainerFluid : ""}>
            <Row className="footer-theme partition-f">
              <Col lg="4" md="6">
                <div
                  className={`footer-title ${
                    isOpen && collapse == 1 ? "active" : ""
                  } footer-mobile-title`}
                >
                  <h4
                    onClick={() => {
                      setCollapse(1);
                      setIsOpen(!isOpen);
                    }}
                  >
                    О нас
                    <span className="according-menu"></span>
                  </h4>
                </div>
                <YMInitializer
                  accounts={[86692153, 86695212, 86696395]}
                  options={{
                    clickmap: true,
                    trackLinks: true,
                    accurateTrackBounce: true,
                    webvisor: true,
                    trackHash: true
                  }}
                  version="2"
                />
                <Collapse
                  isOpen={width ? (collapse === 1 ? isOpen : false) : true}
                >
                  <div className="footer-contant">
                    <div className="footer-logo">
                      <LogoImage logo={logoName} />
                    </div>
                    <p>
                      ООО "Электропромышленная инженерная компания" - стабильно
                      растущая организация, специализирующаяся на автоматизации
                      предприятий по всей России.
                    </p>
                    {/* <div className="footer-social">
                      <ul>
                        <li>
                          <a href="https://www.facebook.com" target="_blank">
                            <i
                              className="fa fa-facebook"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://plus.google.com" target="_blank">
                            <i
                              className="fa fa-google-plus"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com" target="_blank">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com" target="_blank">
                            <i
                              className="fa fa-instagram"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://rss.com" target="_blank">
                            <i className="fa fa-rss" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </Collapse>
              </Col>
              <Col className="offset-xl-1">
                <div className="sub-title">
                  <div
                    className={`footer-title ${
                      isOpen && collapse == 2 ? "active" : ""
                    } `}
                  >
                    <h4
                      onClick={() => {
                        if (width) {
                          setIsOpen(!isOpen);
                          setCollapse(2);
                        } else setIsOpen(true);
                      }}
                    >
                      карта сайта
                      <span className="according-menu"></span>
                    </h4>
                  </div>
                  <Collapse
                    isOpen={width ? (collapse === 2 ? isOpen : false) : true}
                  >
                    <div className="footer-contant">
                      <ul>
                        <li>
                          <Link href={`/`}>
                            <a>Главная</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/#uslugi`}>
                            <a>Услуги</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/o-kompanii`}>
                            <a> О компании </a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/contact`}>
                            <a>Контакты</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/#faq`}>
                            <a> Ответы на вопросы </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </Collapse>
                </div>
              </Col>
              <Col>
                <div className="sub-title">
                  <div
                    className={`footer-title ${
                      isOpen && collapse == 3 ? "active" : ""
                    } `}
                  >
                    <h4
                      onClick={() => {
                        if (width) {
                          setIsOpen(!isOpen);
                          setCollapse(3);
                        } else setIsOpen(true);
                      }}
                    >
                      Услуги
                      <span className="according-menu"></span>
                    </h4>
                  </div>
                  <Collapse
                    isOpen={width ? (collapse === 3 ? isOpen : false) : true}
                  >
                    <div className="footer-contant">
                      <ul>
                        <li>
                          <Link href="/uslugi/puskonaladochnye-raboty-proizvodstvennogo-jelektrooborudovanija">
                            <a>
                              Пусконаладочные работы производственного
                              электрооборудования
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/uslugi/diagnostika-neispravnostej-ehlektrotekhnicheskih-kompleksov">
                            <a>
                              Диагностика и устранение неисправностей электротехнических
                              комплексов
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/uslugi/proektirovanie-montazh-i-naladka-ustrojstv-asu-tp">
                            <a>Проектирование, монтаж и наладка устройств АСУ ТП</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/uslugi/naladka-linij-profilirovaniya-tonkolistovogo-metalla">
                            <a>
                              Наладка линий профилирования тонколистового
                              металла
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/uslugi/naladka-i-modernizaciya-ehlektricheskih-privodov">
                            <a>Наладка и модернизация электрических приводов</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/uslugi/drugie-vidy-rabot">
                            <a>Другие виды работ</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </Collapse>
                </div>
              </Col>
              <Col>
                <div className="sub-title">
                  <div
                    className={`footer-title ${
                      isOpen && collapse == 4 ? "active" : ""
                    } `}
                  >
                    <h4
                      onClick={() => {
                        if (width) {
                          setIsOpen(!isOpen);
                          setCollapse(4);
                        } else setIsOpen(true);
                      }}
                    >
                      контакты
                      <span className="according-menu"></span>
                    </h4>
                  </div>
                  <Collapse
                    isOpen={width ? (collapse === 4 ? isOpen : false) : true}
                  >
                    <div className="footer-contant">
                      <ul className="contact-list">
                        {/* <li>
                          <i className="fa fa-map-marker"></i>Multikart Demo
                          Store, Demo store India 345-659
                        </li> */}
                        <li>
                          <i className="fa fa-phone"></i>
                          <a href="tel:+79321159000">8 (932) 115-90-00</a>
                        </li>
                        <li>
                          <i className="fa fa-envelope-o"></i>
                          <a href="mailto: info@eec-ural.ru">
                            info@eec-ural.ru
                          </a>
                        </li>
                        <li style={{ paddingLeft: 0 }}>ИНН: 6686135257</li>
                        <li style={{ paddingLeft: 0 }}>ОГРН: 1216600049930</li>
                        {/* <li>
                          <i className="fa fa-fax"></i>Fax: 123456
                        </li> */}
                      </ul>
                    </div>
                  </Collapse>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <CopyRight
          layout={layoutClass}
          fluid={copyRightFluid ? copyRightFluid : ""}
        />
      </footer>
    </div>
  );
};
export default MasterFooter;
