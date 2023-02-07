import React, { Fragment } from "react";
import Slider from "react-slick";
import MasterBanner from "./MasterBanner";

const HomeSlider = ({ data, alt }) => {
  React.useEffect(() => {
    document.getElementById("first-slider").style.paddingTop =
      document.getElementById("head").offsetHeight.toString() + "px";
  }, []);
  const settings = {
    speed: 1500,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 150,
  };
  return (
    <Fragment>
      <section
        className={`service_slide position-relative ${alt ? "pt-0" : ""}`}
        id={alt ? null : "first-slider"}
      >
        {alt ? <p className="slider-text">ELF BAR LUX</p> : null}
        <Slider {...settings} className="slide-1 home-slider text-white">
          {data.map((data, i) => {
            return (
              <MasterBanner
                key={i}
                img={data.img}
                link={data.link}
                title={data.title}
                desc={data.desc}
                classes={data.classes}
              />
            );
          })}
        </Slider>
      </section>
    </Fragment>
  );
};

export default HomeSlider;
