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
import FaqBlock from "../components/faq";
import AboutCompany from "../components/About-Company";
import FaqSection from "../components/Faq-Section";
import DiplomaBlock from "../components/DiplomaBlock";
import { number } from "prop-types";


const AboutPage = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-deafult", "#1661be");
    document.documentElement.style.setProperty("--gradient1", "#1661be");
    document.documentElement.style.setProperty("--gradient2", "#1661be");
  });
  const text_about = {
    title_about: "О компании",
    img_about: "/assets/images/banner/11.jpg",
  };
  const [show, setShow] = React.useState(false);
  const small = window?.matchMedia("(max-width:768px)").matches;

  return (
    <Fragment>
      <Helmet>
        <meta name="viewport" content="width=device-width" />
        <meta
          name="description"
          content="Проводим пусконаладочные работы на предприятиях РФ и Свердловской области, Екатеринбург с бесплатным выездом. Звоните: 8 (932) 115-90-00."
        />
        <link rel="icon" type="image/x-icon" href={favicon ? favicon : ""} />
        <title>О компании | ООО ЭПИК</title>
      </Helmet>
      <HeaderTwo show={() => setShow(true)} close={() => setShow(false)} />
      <div
        style={{ paddingTop: "130px", paddingBottom: "0px" }}
        className="section-b-space"
      >
        <AboutCompany
          title_about={text_about.title_about}
          img_about={text_about.img_about}
        />
      </div>
      <Become />
      <DiplomaBlock />
      {/* <div className="section-b-space">
        <LogoBlock />
      </div> */}
      <FaqSection />
      <MasterFooter
        footerClass={`footer-5`}
        footerLayOut={"light-layout upper-footer"}
        footerSection={"small-section border-section border-top-0"}
        belowSection={"section-b-space light-layout"}
        newLatter={true}
        logoName={"/assets/images/icon/logo/logo.png"}
      />
      {/* <MasterFooterTwo
        footerClass="footer-5"
        logoName="/assets/images/icon/logo/logo.png"
        btnGreen={true}
        show={() => setShow(true)}
      /> */}
      <ModalNew show={show} close={() => setShow(false)} />
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

export default withApollo(AboutPage);
