import React from "react";
// import Modal from "react-modal";
import { Button } from "reactstrap";
import emailjs from "emailjs-com";
import InputMask from "react-input-mask";
import TextField from "@material-ui/core/TextField"
import PhoneInput from 'react-phone-input-2'
import { Modal } from "reactstrap"

const customStyles = {
  overlay: {
    zIndex: "10000",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    border: "none",
    background: "#fff",
    transform: "translate(-50%, -50%)"
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

const ModalNew = ({ show, close }) => {
  const [showAlert, setShowAlert] = React.useState(false);

  let subtitle;

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
      e.target.reset();
      return false
  }

  // Отключение скроллинга в модалке
  show
    ? (document.querySelector("body").style.overflow = "hidden")
    : (document.querySelector("body").style.overflow = "visible");

  return (

    
      <Modal fullscreen={true} centered={true} isOpen={show}>
        <div className="modal-new">
          <form onSubmit={sendEmail}>
            <div className="close-modal" onClick={close} />
            <p className="pr-4 pr-md-0 ">
              Оставьте контакты, а наш специалист свяжется с Вами
            </p>
            <input
              type="text"
              name="name"
              placeholder="Введите имя"
              required
            />
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
        </div>
        <div className={`spasibo ${showAlert ? "show" : ""}`}>
          <div className="close" onClick={() => setShowAlert(false)} />
          <p>Ваша заявка успешно отправлена, Спасибо!</p>
        </div>
      </Modal>
  );
};

export default ModalNew;
