import React, { Component } from "react";
import { Row, Col, Nav, NavItem, NavLink } from "reactstrap";
import Styles from "../../../styles/pages/Home/Home.module.css";
import ModalAdd from "../../organisms/Modals/ModalAdd";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <>
        <Row>
          <Col className={Styles.homeProfileImg}>
            <img
              src="http://localhost:3006/profile-img.png"
              alt="profile-image"
            />
          </Col>
        </Row>
        <Row>
          <Col classID={Styles.homeProfileUser}>
            <h5 className={Styles.homeUsername}>{this.props.username}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <Nav vertical>
              <NavItem className={Styles.homeItems}>
                <NavLink href="#" className={Styles.homeItemsName}>
                  Explore
                </NavLink>
              </NavItem>
              <NavItem className={Styles.homeItems}>
                <NavLink href="#" className={Styles.homeItemsName}>
                  History
                </NavLink>
              </NavItem>
              <NavItem className={Styles.homeItems}>
                <NavLink href="#" className={Styles.homeItemsName}>
                  <ModalAdd
                    text="Add Book"
                    genre={this.props.genre}
                    author={this.props.author}
                  />
                  {/* Add Book */}
                </NavLink>
                <Link to="/login">
                  <div className={Styles.homeItemsLogout}>Log Out</div>
                </Link>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </>
    );
  }
}
