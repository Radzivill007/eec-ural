import React, { Fragment, useEffect } from "react";
import HeaderTwo from "../components/headers/header-two";
import { withApollo } from "../helpers/apollo/apollo";
import Helmet from "react-helmet";
import favicon from "../public/favicon.ico";
import ModalBlock from "../components/component/modal-block";
import ModalNew from "../components/component/modal-new";

import BannerSection from "../components/component/BannerSection";
import MainBanner from "../components/component/MainBanner";
import LogoBlock from "../components/common/logo-block";
import Become from "../components/common/become";
import MasterParallaxBanner from "../components/MasterParallaxBanner";
import MasterFooter from "../components/footers/common/MasterFooter";
import FaqSection from "../components/Faq-Section";
import MyModal from "../components/component/MyModal";

const Marijuana = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-deafult", "#1661be");
    document.documentElement.style.setProperty("--gradient1", "#1661be");
    document.documentElement.style.setProperty("--gradient2", "#1661be");
  });

  const [show, setShow] = React.useState(false);

  const small = window?.matchMedia("(max-width:768px)").matches;
  const DataFirst = [
    {
      img: small ? "home4" : "home1",
      classes: "p-right text-right",
    },
  ];

  const DataSlider = [
    {
      img: "home6",
      classes: "p-right text-right",
    },
    {
      img: "home7",
      classes: "p-right text-right",
    },
    {
      img: "home8",
      classes: "p-right text-right",
    },
    {
      img: "home9",
      classes: "p-right text-right",
    },
    {
      img: "home10",
      classes: "p-right text-right",
    },
    {
      img: "home11",
      classes: "p-right text-right",
    },
    {
      img: "home12",
      classes: "p-right text-right",
    },
    {
      img: "home13",
      classes: "p-right text-right",
    },
  ];

  return (
    <Fragment>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" type="image/x-icon" href={favicon ? favicon : ""} />
      </Helmet>
      <HeaderTwo show={() => setShow(true)} close={() => setShow(false)} />
      <MainBanner
        show={() => setShow(true)}
        img="home46"
        desc="Проводим полный комплекс работ по автоматизации предприятий"
      />
      <BannerSection />
      <Become />
      <div className="section-b-space">
        <LogoBlock />
      </div>
      <MasterParallaxBanner
        bg="parallax-banner13"
        parallaxClass="text-center p-left"
        title="О нас"
        subTitle1="Дмитрий Богатырёв"
        subTitle2="Основатель нашей компании прошел путь от простого рабочего цеха до руководителя на крупном промышленном предприятии."
      />
      <FaqSection />
      {/* <FaqBlock /> */}
      {/* <div className="section-b-space">
        <AboutSection />
      </div> */}
      <MasterFooter
        footerClass={`footer-5`}
        footerLayOut={"light-layout upper-footer"}
        footerSection={"small-section border-section border-top-0"}
        belowSection={"section-b-space light-layout"}
        newLatter={true}
        logoName={"/assets/images/icon/logo/logo.png"}
      />
      <a
        href="https://api.whatsapp.com/send?phone=79321159000&text=Здравствуйте,%20я%20хочу"
        target="_blank"
        rel="noreferrer"
        className="whatsapp"
      >
        <i className="fa fa-whatsapp" aria-hidden="true" />
      </a>
      <a
        href="https://t.me/eec_ural"
        target="_blank"
        rel="noreferrer"
        className="telegram"
      >
        <i className="fa fa-telegram" aria-hidden="true" />
      </a>
    </Fragment>
  );
};

export default withApollo(Marijuana);
