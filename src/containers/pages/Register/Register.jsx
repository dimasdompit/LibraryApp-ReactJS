import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Form, FormGroup } from "reactstrap";
import axios from "axios";

// Components
// import RegisterForm from "../../organisms/Register/RegisterForm";
// import LoginForm from "../../organisms/Login/LoginForm";
// import InputLoginGroup from "../../../components/molecules/InputLoginGroup";
import LoginBanner from "../../organisms/Login/LoginBanner";
import Title from "../../../components/atoms/headings/Title";
import Text1 from "../../../components/atoms/texts/Text1";
import InputForm from "../../../components/atoms/forms/InputForm";
import MainButton from "../../../components/atoms/buttons/MainButton";
import ButtonOutline from "../../../components/atoms/buttons/ButtonOutline";
import Terms from "../../../components/atoms/texts/Terms";
import swal from "sweetalert";

// CSS Login Global Styles
import Logo from "../../../assets/images/bookshelf.png";
import StylesForm from "../../../styles/organism/LoginForm.module.css";
import Styles from "../../../styles/pages/Login/Login.module.css";

class FormRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      roles_id: 2,
      redirect: false,
    };
  }

  handleRegister = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3000/auth/register",
      data: {
        username: this.state.username,
        password: this.state.password,
        roles_id: this.state.roles_id,
      },
    })
      .then((response) => {
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("refreshToken", response.data.data.refreshToken);
        this.setState({
          redirect: true,
        });
        swal({
          icon: "success",
          title: `${response.data.data.status}`,
          showConfirmaButton: false,
          timer: 2000,
        });
      })
      .then(() => {
        setTimeout(() => {
          window.location.assign("/login");
        }, 3000);
      })
      .catch((error) => {
        console.log(error.response);
        swal({
          icon: "error",
          title: `${error.response.data.data}`,
          showConfirmationButton: false,
          confirmButtonColor: "#000000",
        });
      });
  };

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
                <div className={StylesForm.contentLogin}>
                  <img
                    src={Logo}
                    alt="library-logo"
                    className={StylesForm.contentLogo}
                  />
                  <Title text="Register" />
                  <Text1 text="Welcome Back, Please Register to your account!" />
                  <Form onSubmit={this.handleRegister}>
                    <FormGroup>
                      <InputForm
                        type="text"
                        name="username"
                        value={this.state.username}
                        placeholder="Username"
                        onChange={(e) =>
                          this.setState({ username: e.target.value })
                        }
                      />
                      <InputForm
                        type="password"
                        name="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={(e) =>
                          this.setState({ password: e.target.value })
                        }
                      />
                    </FormGroup>
                    <MainButton
                      text="Register"
                      type="submit"
                      onClick={this.showAlert}
                    />
                    <Link to="/login">
                      <ButtonOutline text="Login" />
                    </Link>
                  </Form>
                  <Terms />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default FormRegister;
