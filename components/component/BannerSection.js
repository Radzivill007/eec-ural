import React, { Fragment } from "react";
import Link from "next/link";
import { Container, Row, Col, Media } from "reactstrap";
import banner1 from "../../public/assets/images/banner/1.jpg";
import banner2 from "../../public/assets/images/banner/2.jpg";
import banner3 from "../../public/assets/images/banner/3.jpg";
import banner4 from "../../public/assets/images/banner/4.jpg";
import banner5 from "../../public/assets/images/banner/5.jpg";
import banner6 from "../../public/assets/images/banner/6.jpg";

const Data = [
  {
    img: banner1,
    title: "Пусконаладочные работы производственного электрооборудования",
    link: "/uslugi/puskonaladochnye-raboty-proizvodstvennogo-jelektrooborudovanija",
    classes: "p-left service-block-mobile",
  },
  {
    img: banner2,
    title: "Диагностика и устранение неисправностей электротехнических комплексов",
    link: "/uslugi/diagnostika-neispravnostej-ehlektrotekhnicheskih-kompleksov",
    classes: "p-left service-block-mobile",
  },
  {
    img: banner3,
    title: "Проектирование, монтаж и наладка устройств АСУ ТП",
    link: "/uslugi/proektirovanie-montazh-i-naladka-ustrojstv-asu-tp",
    classes: "p-left service-block-mobile",
  },
  {
    img: banner4,
    title: "Наладка линий профилирования тонколистового металла",
    link: "/uslugi/naladka-linij-profilirovaniya-tonkolistovogo-metalla",
    classes: "p-left service-block-mobile",
  },
  {
    img: banner5,
    title: "Наладка и модернизация электрических приводов",
    link: "/uslugi/naladka-i-modernizaciya-ehlektricheskih-privodov",
    classes: "p-left service-block-mobile",
  },
  {
    img: banner6,
    title: "Другие виды работ",
    link: "/uslugi/drugie-vidy-rabot",
    classes: "p-left service-block-mobile",
  },
];

const MasterBannerSection = ({ img, title, link, classes }) => {
  return (
    <Col md="4">
      <Link href={link}>
        <a>
          <div className={`collection-banner ${classes}`}>
            <div className="img-part">
              <Media
                src={img}
                className="img-fluid blur-up lazyload bg-img"
                alt=""
              />
            </div>
            <div className="contain-banner banner-3 banner-font">
              <div>
                <h2 className="banner-font">{title}</h2>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </Col>
  );
};

const BannerSection = () => {
  return (
    <Fragment>
      <section id="uslugi" className="banner-6 ratio2_1">
        <Container>
          <Row className="partition3">
            {Data.map((data, i) => {
              return (
                <MasterBannerSection
                  key={i}
                  img={data.img}
                  link={data.link}
                  title={data.title}
                  classes={data.classes}
                />
              );
            })}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default BannerSection;
