import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  InputGroup,
  // InputGroupAddon,
  // Button,
  Form,
} from "reactstrap";
import Styles from "../../../styles/pages/Home/Home.module.css";

class Topnav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <>
        <Col className={Styles.navbarArea}>
          <Navbar light expand="md" className={Styles.homeTopnav}>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret className={Styles.homeDropdown}>
                    All Categories
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Title</DropdownItem>
                    <DropdownItem>Genre</DropdownItem>
                    <DropdownItem>Author</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret className={Styles.homeDropdown}>
                    All Time
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Newest Books</DropdownItem>
                    <DropdownItem>Old Books</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <InputGroup className={Styles.homeSearch}>
                  {/* <InputGroupAddon addonType="prepend">
                              <Button className={Styles.homeSearchButton}>
                                <FontAwesomeIcon icon={faSearch} />
                              </Button>
                            </InputGroupAddon> */}
                  <Form>
                    <Input
                      type="search"
                      className={Styles.homeSearchInput}
                      value={this.state.query}
                      onChange={this.handleInputChange}
                      placeholder="Search Book"
                    />
                  </Form>
                </InputGroup>
              </Nav>
            </Collapse>
            <NavbarBrand className={Styles.homeBrand}>
              <Link to="/">
                <img
                  src="http://localhost:3006/bookshelf-home.png"
                  alt="home-logo"
                />
                <span>DOMSLibrary</span>
              </Link>
            </NavbarBrand>
          </Navbar>
        </Col>
      </>
    );
  }
}

export default Topnav;
