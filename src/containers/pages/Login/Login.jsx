import React, { Component } from "react";
import { Row, Col, Container, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";

// import axios from "axios";
import swal from "sweetalert";
import { login } from "../../../redux/actions/auth";
import { connect } from "react-redux";

// Components
import LoginBanner from "../../organisms/Login/LoginBanner";
import Title from "../../../components/atoms/headings/Title";
import Text1 from "../../../components/atoms/texts/Text1";
import InputForm from "../../../components/atoms/forms/InputForm";
import MainButton from "../../../components/atoms/buttons/MainButton";
import ButtonOutline from "../../../components/atoms/buttons/ButtonOutline";
import Terms from "../../../components/atoms/texts/Terms";

import Logo from "../../../assets/images/bookshelf.png";
import StylesForm from "../../../styles/organism/LoginForm.module.css";
import CheckBox from "../../../components/atoms/forms/CheckBox";

// CSS Login Global Styles
import Styles from "../../../styles/pages/Login/Login.module.css";
// import auth from "../../../redux/reducers/auth";

class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      isLoggedIn: false,
      username: "",
      password: "",
    };
  }

  handleLogin = (event) => {
    event.preventDefault();
    /* USING REDUX CONFIG */
    // console.log(this.props.auth);
    const data = {
      username: this.state.username,
      password: this.state.password,
    };
    this.props
      .login(data)
      .then((response) => {
        // console.log(response.value.data.data.status);
        const message = response.value.data.data.status;
        swal({
          icon: "success",
          title: `${message}`,
          button: false,
          timer: 2000,
        });
      })
      .then(() => {
        setTimeout(() => {
          this.props.history.push("/");
        }, 2000);
      })
      .catch((error) => {
        console.log(error.response);
        const errMessage = error.response.data.data;
        swal({
          icon: "error",
          title: `${errMessage}`,
          showConfirmButton: false,
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
                <LoginBanner username={this.state.username} />
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
