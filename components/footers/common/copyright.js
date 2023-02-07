import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

const CopyRight = ({ layout, fluid }) => {
  return (
    <Fragment>
      <div className={`sub-footer ${layout}`}>
        <Container fluid={fluid}>
          <div className="d-flex justify-content-center">
            <div className="footer-end">
              <p>
                <i className="fa fa-copyright" aria-hidden="true"></i> 2021
                Разработано в{" "}
                <a target="_blank" href="https://leadboat.ru">
                  leadboat.ru
                </a>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default CopyRight;
