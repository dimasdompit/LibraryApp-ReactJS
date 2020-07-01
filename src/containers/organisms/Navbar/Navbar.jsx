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
  InputGroupAddon,
  Button,
  Form,
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// import SearchBar from "../../../components/molecules/SearchBar";

import Styles from "../../../styles/pages/Home/Home.module.css";

class Topnav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      search: "",
      genre: "genre",
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleInputChange = async (event) => {
    await this.setState({
      search: event.target.value,
    });
    this.props.handleState(this.state.search);
  };

  handleGenre = async (event) => {
    await this.setState({
      genre: event.target.value,
    });
    this.props.getGenre(this.state.genre);
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
                    {/* <DropdownItem>Title</DropdownItem> */}
                    <DropdownItem
                      value={this.state.genre}
                      onClick={this.handleGenre}
                    >
                      Genre
                    </DropdownItem>
                    {/* <DropdownItem>Author</DropdownItem> */}
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
                  <InputGroupAddon addonType="prepend">
                    <Button type="submit" className={Styles.homeSearchButton}>
                      <FontAwesomeIcon icon={faSearch} />
                    </Button>
                  </InputGroupAddon>
                  {/* <Form> */}
                  <Input
                    type="text"
                    className={Styles.homeSearchInput}
                    value={this.state.search}
                    onChange={this.handleInputChange}
                    placeholder="Search Book"
                  />
                  {/* </Form> */}
                </InputGroup>
                {/* <SearchBar
                  search={this.state.search}
                  onChage={this.props.onChange}
                /> */}
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
