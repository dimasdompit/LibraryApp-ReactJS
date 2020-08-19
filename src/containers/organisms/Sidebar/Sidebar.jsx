import React, { Component } from "react";
import { Row, Col, Nav, NavItem, NavLink } from "reactstrap";
import Styles from "../../../styles/pages/Home/Home.module.css";
import ModalAdd from "../../organisms/Modals/ModalAdd";

import History from "../../organisms/History/History";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Row>
          <Col className={Styles.homeProfileImg}>
            <img
              src="http://54.227.69.145:3006/profile-img.png"
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
                  <History userId={this.props.userId} />
                </NavLink>
              </NavItem>
              {this.props.roles === "admin" || this.props.roles === "staff" ? (
                <NavItem className={Styles.homeItems}>
                  <NavLink href="#" className={Styles.homeItemsName}>
                    <ModalAdd
                      text="Add Book"
                      genre={this.props.genre}
                      author={this.props.author}
                      status={this.props.status}
                    />
                  </NavLink>
                </NavItem>
              ) : (
                ""
              )}
              <div
                className={Styles.homeItemsLogout}
                onClick={this.props.onClick}
              >
                Log Out
              </div>
            </Nav>
          </Col>
        </Row>
      </>
    );
  }
}
