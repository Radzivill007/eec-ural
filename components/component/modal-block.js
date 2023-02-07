import React from "react";
import { Button, Modal } from "reactstrap";
import emailjs from "emailjs-com";
import InputMask from "react-input-mask";

const ModalBlock = ({ show, close }) => {
  const [showAlert, setShowAlert] = React.useState(false);
  const small = window?.matchMedia("(max-width:768px)").matches;

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
  // 
  show
    ? (document.querySelector("body").style.overflow = "hidden")
    : (document.querySelector("body").style.overflow = "visible");

  return (
    <>
      <div className={show || showAlert ? "blur" : ""} />
      <div className={show ? "mymodal show" : "mymodal"}>
        <form onSubmit={sendEmail}>
          <div className="close" onClick={close} />
          <p className="pr-4 pr-md-0 ">
            Оставьте контакты, а наш специалист свяжется с Вами
          </p>
          <input onclick="return true" type="text" name="name" placeholder="Введите имя" required />
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
                Я даю согласие на обработку персональных данных в соответствии с
                &nbsp;
                <a href="https://eec-ural.ru/policy/" target="_blank">
                  Политикой конфиденциальности
                </a>{" "}
              </p>
            </span>
          </label>
          <Button type="submit">ОСТАВИТЬ ЗАЯВКУ</Button>
        </form>
      </div>
      <div className={`spasibo ${showAlert ? "show" : ""}`}>
        <div className="close" onClick={() => setShowAlert(false)} />
        <p>Ваша заявка успешно отправлена, Спасибо!</p>
      </div>
    </>
  );
};

export default ModalBlock;
