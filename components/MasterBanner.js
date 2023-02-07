import Link from "next/link";
import { Col, Container, Row } from "reactstrap";
import MyModal from "./component/MyModal";

const modal = () => {
  return <MyModal btnText="Связаться с нами" />;
};

const MasterBanner = ({
  img,
  title,
  desc,
  link,
  classes,
  btn,
  btnClass,
  show,
}) => {
  return (
    <div>
      <div className={`home ${img} ${classes ? classes : "text-center"}`}>
        <Container>
          <Row>
            <Col>
              <div className="slider-contain">
                <div>
                  <h4>{title}</h4>
                  <h1>{desc}</h1>
                  {/* <Link href={link}> */}
                  {/* <a
                    onClick={show}
                    className={`btn btn-solid ${btnClass ? btnClass : ""}`}
                  > */}
                  {/* {btn ? btn : modal}{" "} */}
                  <MyModal btnText="Связаться с нами" btnClass="btn btn-solid"/>
                  {/* </a> */}
                  {/* </Link> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MasterBanner;
