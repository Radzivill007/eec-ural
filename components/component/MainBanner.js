import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "reactstrap";
import MasterBanner from "../MasterBanner";

const Data = [
  {
    title: 'ООО "Электропромышленная инженерная компания"',
    link: "#",
    classes: "text-left main-banner-text",
  },
];

const MainBanner = ({ show, desc, img }) => {
  return (
    <>
      <title>ООО ЭПИК Пусконаладочные работы на предприятиях по РФ</title>
      {/*herm leadboat <section className="small-slider"> */}
      <section className="slider">
        <Slider className="slide-1 home-slider">
          {Data.map((data, i) => {
            return (
              <MasterBanner
                key={i}
                img={img}
                link={data.link}
                show={show}
                title={data.title}
                desc={desc}
                classes={data.classes}
              />
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default MainBanner;

