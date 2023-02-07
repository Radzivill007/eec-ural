import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import firebase from "../../../config/base";
import { useRouter } from "next/router";

const TopBarDark = ({ topClass, fluid }) => {
  const router = useRouter();
  const firebaseLogout = () => {
    firebase.auth().signOut();
    router.push("/page/account/login-auth");
  };
  return (
    <div className={topClass}>
      <Container fluid={fluid}>
        <p style={{textAlign: 'center', padding: '20px', color: 'white'}}>
          Этот продукт содержит никотин, не исключает риски для здоровья и
          вызывает зависимость
        </p>
      </Container>
    </div>
  );
};

export default TopBarDark;
