import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";

// Components
import LoginBanner from "../../organisms/Login/LoginBanner";
import RegisterForm from "../../organisms/Register/RegisterForm";

// CSS Login Global Styles
import Styles from "../../../styles/pages/Login/Login.module.css";

class FormLogin extends Component {
  render() {
    return (
      <>
        <div className={Styles.loginArea}>
          <Container fluid>
            <Row>
              <Col md="8" className={Styles.headerLogin}>
                <LoginBanner />
              </Col>
              <Col md="4">
                <RegisterForm />
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default FormLogin;
