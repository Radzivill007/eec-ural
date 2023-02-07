import React, { Fragment, useEffect } from "react";
import HeaderTwo from "../components/headers/header-two";
import { withApollo } from "../helpers/apollo/apollo";
import Helmet from "react-helmet";
import favicon from "../public/favicon.ico";
import ModalBlock from "../components/component/modal-block";

import BannerSection from "../components/component/BannerSection";
import MainBanner from "../components/component/MainBanner";
import LogoBlock from "../components/common/logo-block";
import Become from "../components/common/become";
import MasterParallaxBanner from "../components/MasterParallaxBanner";
import MasterFooter from "../components/footers/common/MasterFooter";
import FaqSection from "../components/Faq-Section";
import FaqBlock from "../components/faq";
import AboutSection from "../components/About-Section";
import { Container } from "next/app";

const ContactPage = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-deafult", "#1661be");
    document.documentElement.style.setProperty("--gradient1", "#1661be");
    document.documentElement.style.setProperty("--gradient2", "#1661be");
  });

  const [show, setShow] = React.useState(false);
  const small = window?.matchMedia("(max-width:768px)").matches;
  const text_about = {
    title_about: "Контакты",
    description_about:
      "Пусконаладочные работы производственного электрооборудования",
  };

  return (
    <Fragment>
      <Helmet>
        <title>Контакты | ООО ЭПИК</title>
         <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta
          name="description"
          content="Проводим пусконаладочные работы на предприятиях РФ и Свердловской области, Екатеринбург с бесплатным выездом. Звоните: 8 (932) 115-90-00."
        />
        <link rel="icon" type="image/x-icon" href={favicon ? favicon : ""} />
      </Helmet>
      <div
        className="bg-lines"
        // style={{
        //   background:
        //     "fixed no-repeat url(assets/images/bg-lines.jpg) 100% -18%",
        // }}
      >
        <HeaderTwo show={() => setShow(true)} close={() => setShow(false)} />
        <div
          className="title1"
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "50rem",
            paddingTop: "200px",
          }}
        >
          <h2 className="title-inner1">Контакты</h2>
          <h5
            style={{
              fontSize: "24px",
              marginBottom: "16px",
            }}
          >
            ООО "Электропромышленная инженерная компания"
          </h5>
          <h5
            style={{
              fontSize: "24px",
              marginBottom: "16px",
            }}
          >
            <strong>Телефон:</strong> +7 (932) 115-90-00
          </h5>
          <h5
            style={{
              fontSize: "24px",
              marginBottom: "16px",
            }}
          >
            <strong>Email:</strong> info@eec-ural.ru
          </h5>
          <h5
            style={{
              fontSize: "24px",
              marginBottom: "16px",
            }}
          >
            <strong>ОГРН:</strong> 1216600049930
          </h5>
          <h5
            style={{
              fontSize: "24px",
              marginBottom: "16px",
            }}
          >
            <strong>ИНН:</strong> 6686135257
          </h5>

          {/* <span style={{ fontSize: "16px" }}>
                ООО "Электропромышленная инженерная компания"
              </span>
              <br />
              <span style={{ fontSize: "16px" }}>
                <strong>Телефон:</strong> +7 (932) 115-90-00
              </span>
              <span style={{ fontSize: "16px" }}>
                <strong>Email:</strong> info@eec-ural.ru
              </span> */}
          {/* <AboutSection
              title_about={text_about.title_about}
              description_about={text_about.description_about}
            /> */}
        </div>
        <FaqSection style={{ paddingTop: "0px" }} />
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
        <ModalBlock
          show={show}
          close={() => setShow(false)}
          go={() => setShow(true)}
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
      </div>
    </Fragment>
  );
};

export default withApollo(ContactPage);
