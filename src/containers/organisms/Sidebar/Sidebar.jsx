import React, { Component } from "react";
import { Row, Col, Nav, NavItem, NavLink } from "reactstrap";
import Styles from "../../../styles/pages/Home/Home.module.css";

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
            <h5 className={Styles.homeUsername}>Niki Zefanya</h5>
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
                  Add Book
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </>
    );
  }
}
