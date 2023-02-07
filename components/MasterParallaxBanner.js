import React, { Fragment } from "react";
import Link from "next/link";

import { Container, Row, Col } from "reactstrap";

const MasterParallaxBanner = ({
  parallaxSectionClass,
  bg,
  parallaxClass,
  title,
  subTitle1,
  subTitle2,
}) => {
  return (
    <Fragment>
      <section className={`p-0 ${parallaxSectionClass}`}>
        <div className={`full-banner ${bg} parallax ${parallaxClass}`}>
          <Container>
            <Row>
              <Col>
                <div
                  className="banner-contain col-lg-6 col-md-8 col-sm-12"
                  style={{ maxWidth: "550px" }}
                >
                  <h2>{title}</h2>
                  <h3  style={{ fontSize: "22px", textTransform: "none", color: "#1661be" }}>{subTitle1}</h3>
                  <h5 className="parallax-sub-title2">{subTitle2}</h5>
                  <Link href="/o-kompanii">
                    <a className="btn btn-solid ">Читать далее...</a>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </Fragment>
  );
};

export default MasterParallaxBanner;
