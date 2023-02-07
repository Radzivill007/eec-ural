import { Box, Modal, Paper, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import emailjs from "emailjs-com";
import InputMask from "react-input-mask";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "500px",
  minWidth: "fit-content",
  marginRight: "20px",
  zIndex: "11000",
};

const MyModal = (props) => {
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = React.useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleOpen = () => {
    setShow(true);
  };
  const form = React.useRef();

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
          setShowAlert(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <>
      <a
        // variant="contained"
        style={props.btnStyle}
        className={props.btnClass}
        onClick={handleOpen}
      >
        {props.btnText}
      </a>
      <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ zIndex: 10000 }}
      >
        <div style={style}>
          <form ref={form} onSubmit={sendEmail} className="modal-new">
            <div className="close" onClick={handleClose} />
            <p className="pr-4 pr-md-0 ">
              Оставьте контакты, а наш специалист свяжется с Вами
            </p>
            <input type="text" name="name" placeholder="Введите имя" required />
            <InputMask
              type="tel"
              name="phone"
              mask="+9(999)999-99-99"
              defaultValue="+7 (___) ___-__-__"
              maskChar="_"
              required
            />
            <input
              type="text"
              name="message"
              placeholder="Опишите вашу проблему"
              required
            />
            <input type="email" name="email" placeholder="Введите E-mail" />
            <label className="label-checkbox">
              <input type="checkbox" value="1" />
              <span>
                <p>
                  Я даю согласие на обработку персональных данных в соответствии
                  с &nbsp;
                  <a href="https://eec-ural.ru/policy/" target="_blank">
                    Политикой конфиденциальности
                  </a>{" "}
                </p>
              </span>
            </label>
            <Button type="submit">ОСТАВИТЬ ЗАЯВКУ</Button>
          </form>
          <div className={`spasibo ${showAlert ? "show" : ""}`}>
            <div className="close" onClick={() => setShowAlert(false)} />
            <p>Ваша заявка успешно отправлена, Спасибо!</p>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default MyModal;
