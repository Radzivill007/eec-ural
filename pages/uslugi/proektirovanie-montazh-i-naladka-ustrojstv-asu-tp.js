import React, { Fragment, useEffect } from "react";
import HeaderTwo from "../../components/headers/header-two";
import { withApollo } from "../../helpers/apollo/apollo";
import Helmet from "react-helmet";
import favicon from "../../public/favicon.ico";
import ModalNew from "../../components/component/modal-block";

import FormBlock from "../../components/component/form-block";

import BannerSection from "../../components/component/BannerSection";
import MainBanner from "../../components/component/MainBanner";
import LogoBlock from "../../components/common/logo-block";
import Become from "../../components/common/become";
import MasterParallaxBanner from "../../components/MasterParallaxBanner";
import MasterFooter from "../../components/footers/common/MasterFooter";
import FaqBlock from "../../components/faq";
import ServicesThree from "../../components/ServicesThree";
import FaqSection from "../../components/Faq-Section";
import DiplomaBlock from "../../components/DiplomaBlock";

const UslugiThreePage = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-deafult", "#1661be");
    document.documentElement.style.setProperty("--gradient1", "#1661be");
    document.documentElement.style.setProperty("--gradient2", "#1661be");
  });

  const [show, setShow] = React.useState(false);
  const small = window?.matchMedia("(max-width:768px)").matches;
  const text_about = {
    title_about: "Проектирование, монтаж и наладка устройств АСУ ТП",
    img_about: "/assets/images/banner/3.jpg",
  };

  return (
    <Fragment>
      <Helmet>
        <title>
          Проектирование, монтаж и наладка устройств АСУ ТП | ООО ЭПИК
        </title>
         <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta
          name="description"
          content="Проводим пусконаладочные работы на предприятиях РФ и Свердловской области, Екатеринбург с бесплатным выездом. Звоните: 8 (932) 115-90-00."
        />
        <link rel="icon" type="image/x-icon" href={favicon ? favicon : ""} />
      </Helmet>
      <HeaderTwo show={() => setShow(true)} close={() => setShow(false)} />
      <MainBanner
        show={() => setShow(true)}
        img="home47" desc="ПРОЕКТИРОВАНИЕ, МОНТАЖ И НАЛАДКА УСТРОЙСТВ АСУ ТП"
      />
      {/* {/* Old style={{ paddingBottom: "0px" }} */}
      <div style={{ paddingBottom: "0px" }} className="section-b-space">
        <ServicesThree
          title_about={text_about.title_about}
          img_about={text_about.img_about}
          show={() => setShow(true)}
        />
      </div>
      <div className="section-b-space" style={{ paddingBottom: "0px" }}>
        <LogoBlock />
      </div>
      <Become />
      <FormBlock
        show={show}
        close={() => setShow(false)}
        go={() => setShow(true)}
      />
      {/* <div class="title1">
        <h2 class="title-inner1">Другие услуги</h2>
      </div> */}
      <BannerSection />
      <div style={{ paddingBottom: "70px" }}>
        <DiplomaBlock />
      </div>
      <MasterParallaxBanner
        bg="parallax-banner13"
        parallaxClass="text-center p-left"
        title="О нас"
        subTitle1="Дмитрий Богатырёв"
        subTitle2="Основатель нашей компании прошел путь от простого рабочего цеха до руководителя на крупном промышленном предприятии."
      />
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

export default withApollo(UslugiThreePage);
