import { Box, Modal, Paper, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import emailjs from "emailjs-com";

const Page404 = () => {
  const [show, setShow] = useState(false);
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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <section className="p-0">
      <Container>
        <Row>
          <Col sm="12">
            <div className="error-section">
              <h1>404</h1>
              <h2>Страница не найдена</h2>
              <a href="/" className="btn btn-solid">
                Вернуться на главную
              </a>
            </div>
          </Col>
        </Row>
        <Button variant="contained" onClick={handleOpen}>
          open modal
        </Button>
        <Modal
          open={show}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Paper variant="outlined" style={{ position: "relative" }}>
            <Button
              onClick={handleClose}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                cursor: "pointer",
              }}
            />
            <Box m={4}>
              <Typography>Form title</Typography>
              <form ref={form} onSubmit={sendEmail}>
                <TextField name="name" type="text" />
                <br />
                <TextField name="phone" type="text" />
                <br />
                <TextField name="message" type="text" />
                <br />
                <br />
                <Button type="submit">Sumbit</Button>
              </form>
            </Box>
          </Paper>
        </Modal>
      </Container>
    </section>
  );
};
export default Page404;
