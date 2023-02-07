import React, { useState } from "react";
import {
  Collapse,
  Card,
  CardHeader,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";

const faqData = [
  {
    qus: "Из чего будет складываться стоимость на услуги?",
    ans: "Стоимость услуги зависит от объёма работ, сложности её выполнения и заданных сроков.",
  },
  {
    qus: "Есть ли какие-то гарантии на сроки выполнения услуг?",
    ans: "Сроки выполнения услуг прописываются в договоре, тем самым подкрепляя наши обязательства перед клиентом.",
  },
  {
    qus: "Работаем ли мы в выходные или праздничные дни?",
    ans: "Мы можем выполнить работы в выходные или праздничные дни по предварительной договоренности с заказчиком.",
  },
  {
    qus: "Проводим ли мы техническое обслуживание оборудования?",
    ans: "Мы проводим техническое обслуживание оборудования согласно графику планово-предупредительных ремонтов (ППР),  который мы составляем индивидуально для каждого электротехнического комплекса.",
  },
  {
    qus: "Предоставляем ли мы гарантии на проводимые работы?",
    ans: "Мы предоставляем гарантию на все выполненные нами работы в течение 30 календарных со дня подписания акта выполненных работ.",
  },
];

const FaqList = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Card>
      <CardHeader id="headingOne">
        <h5 className="mb-0">
          <button
            className="btn btn-link"
            type="button"
            data-toggle="collapse"
            onClick={toggle}
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {faq.qus}
          </button>
        </h5>
      </CardHeader>
      <Collapse
        isOpen={isOpen}
        id="collapseOne"
        className="collapse"
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
      >
        <div className="card-body">
          <p>{faq.ans}</p>
        </div>
      </Collapse>
    </Card>
  );
};

const FaqBlock = () => {
  return (
    <>
      {/* <CommonLayout parent="home" title="faq"> */}
      <section id="faq" className="faq-section section-b-space">
        <Container>
          <Row>
            <Col sm="12">
              <h3
                style={{
                  color: "black",
                  paddingBottom: "25px",
                  fontWeight: "bold",
                }}
              >
                Ответы на часто задаваемые вопросы:
              </h3>
              <div className="accordion theme-accordion" id="accordionExample">
                {faqData.map((faq, i) => (
                  <FaqList faq={faq} key={i} />
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* </CommonLayout> */}
    </>
  );
};

export default FaqBlock;
