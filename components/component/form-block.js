import React from "react";
import { Button, Modal, Form, FormGroup } from "reactstrap";
import emailjs from "emailjs-com";
import InputMask from "react-input-mask";
import { Container } from "next/app";

const FormBlock = ({ show, close }) => {
  const [showAlert, setShowAlert] = React.useState(false);

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_brn1eel",
        "template_un2ql5r",
        e.target,
        "user_eoS7mUZ09qO1Rc4fi9PX5"
      )
      .then(
        (result) => {
          close();
          setShowAlert(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <Container>
      <div className={show || showAlert ? "blur" : ""} onClick={close} />
        <div className="container">
          <div
            className="wrapper-formblock"
          >
            <div
              className="formblocktext"
            >
              <p className="p-title">Связь с инженером!</p>
              <p>
                Оставьте заявку или позвоните по номеру, наш инженер перезвонит
                Вам и проконсультирует по вашему вопросу!
              </p>
              <span>
                +7 932 115 90 00
                <br/>
                info@eec-ural.ru
              </span>
            </div>
            <div
              className="myformblocknew"
              onClick={(e) => e.stopPropagation()}
            >
              <form onSubmit={sendEmail}>
                <p className="title-form">
                  Получите бесплатную консультацию
                </p>
                <label className="label-input">
                  Имя:
                  <input
                    type="text"
                    name="name"
                    placeholder="Введите имя"
                    required
                  />
                </label>
                <label className="label-input">
                  Телефон:
                  <InputMask
                    type="tel"
                    name="phone"
                    mask="+9(999)999-99-99"
                    defaultValue="+7 (___) ___-__-__"
                    maskChar="_"
                    required
                  />
                </label>
                <label className="label-checkbox">
                  <input type="checkbox" checked />
                  <span>
                    <p className="policytext">
                      Я даю согласие на обработку персональных данных в
                      соответствии с&nbsp;
                      <a href="https://eec-ural.ru/policy/" target="_blank">
                        Политикой конфиденциальности
                      </a>{" "}
                    </p>
                  </span>
                </label>
                <Button type="submit">Получить консультацию</Button>
              </form>
            </div>
          </div>
        </div>
        <div className={`spasibo ${showAlert ? "show" : ""}`}>
          <div className="close" onClick={() => setShowAlert(false)} />
          <p>Ваша заявка успешно отправлена, Спасибо!</p>
        </div>
      </Container>
    </>
  );
};

export default FormBlock;
