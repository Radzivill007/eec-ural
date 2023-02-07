import React, { useState } from "react";
import NavBar from "./common/navbar";
import { Container } from "reactstrap";
import Link from "next/link";

const HeaderTwo = ({ show, close }) => {
  const [navLogo, setNavLogo] = useState(
    "/assets/images/icon/logo/logo-epic.svg"
  );
  React.useEffect(() => {
    if (window.innerWidth < 459) {
      setNavLogo("/assets/images/icon/logo/logo2.png");
    }
  }, []);

  React.useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset >= 48) {
        document.getElementById("navigation")?.classList.add("myfixed");
      } else if (window.pageYOffset < 48) {
        document.getElementById("navigation")?.classList.remove("myfixed");
      }
      if (
        window.pageYOffset + window.innerHeight ===
        document.getElementById("footer")?.offsetHeight +
          document.getElementById("footer")?.offsetTop
      ) {
        show();
      } else if (
        window.pageYOffset + window.innerHeight !==
        document.getElementById("footer")?.offsetHeight +
          document.getElementById("footer")?.offsetTop
      ) {
        close();
      }
    };
  }, []);

  return (
    <div id="head">
      <div className="head-warning">
        <Container style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ paddingLeft: "0", paddingRight: "0" }}>
            <i className="fa fa-phone" aria-hidden="true"></i>{" "}
            <span className="head-warning-hide">Телефон: </span>
            <a style={{ color: "white" }} href="tel:+79321159000">
              8 (932) 115-90-00
            </a>
          </p>
          <p style={{ paddingLeft: "0", paddingRight: "0" }}>
            <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
            <span className="head-warning-hide">Город: </span>
            <a style={{ color: "white" }} href="#">
              Екатеринбург
            </a>
          </p>
          <p style={{ paddingLeft: "0", paddingRight: "0" }}>
            <i className="fa fa-envelope-o" aria-hidden="true"></i>{" "}
            <span className="head-warning-hide">Email: </span>
            <a style={{ color: "white" }} href="mailto: info@eec-ural.ru">
              info@eec-ural.ru
            </a>
          </p>
        </Container>
      </div>
      <header
        id="navigation"
        style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)" }}
      >
        <Container>
          <div className="">
            <div>
              <Link href={"/"}>
                <a>
                  <img src={navLogo} alt="logo" />
                </a>
              </Link>
            </div>
            <div>
              <NavBar show={show} />
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
};

export default HeaderTwo;
