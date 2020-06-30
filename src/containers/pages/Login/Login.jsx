import React, { Component } from "react";
import { Row, Col, Container, Form, FormGroup } from "reactstrap";
import { Link, Redirect } from "react-router-dom";

import axios from "axios";

// Components
import LoginBanner from "../../organisms/Login/LoginBanner";
// import LoginForm from "../../organisms/Login/LoginForm";
import Title from "../../../components/atoms/headings/Title";
import Text1 from "../../../components/atoms/texts/Text1";
// import InputLoginGroup from "../../../components/molecules/InputLoginGroup";
import InputForm from "../../../components/atoms/forms/InputForm";
import MainButton from "../../../components/atoms/buttons/MainButton";
import ButtonOutline from "../../../components/atoms/buttons/ButtonOutline";
import Terms from "../../../components/atoms/texts/Terms";

import Logo from "../../../assets/images/bookshelf.png";
import StylesForm from "../../../styles/organism/LoginForm.module.css";
import CheckBox from "../../../components/atoms/forms/CheckBox";

// CSS Login Global Styles
import Styles from "../../../styles/pages/Login/Login.module.css";

class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      username: "",
      password: "",
    };
  }

  handleLogin = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3000/auth/login",
      data: {
        username: this.state.username,
        password: this.state.password,
      },
    })
      .then((response) => {
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("refreshToken", response.data.data.refreshToken);
        this.setState({
          redirect: true,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
      <>
        <div className={Styles.loginArea}>
          <Container fluid>
            <Row>
              <Col md="8" className={Styles.headerLogin}>
                <LoginBanner />
              </Col>
              <Col md="4">
                {/* <LoginForm /> */}
                <div className={StylesForm.contentLogin}>
                  <img
                    src={Logo}
                    alt="Library-Logo"
                    className={StylesForm.contentLogo}
                  />
                  <Title text="Login" />
                  <Text1 text="Welcome Back, Please Login to your account!" />
                  <Form onSubmit={this.handleLogin}>
                    <FormGroup>
                      <InputForm
                        type="text"
                        name="username"
                        value={this.state.username}
                        placeholder="Username or Email Address"
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
                    <FormGroup>
                      <CheckBox type="checkbox" />
                    </FormGroup>
                    <MainButton
                      text="Login"
                      type="submit"
                      onClick={this.showAlert}
                    />
                    <Link to="/register">
                      <ButtonOutline text="Sign Up" type="button" />
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

export default FormLogin;
