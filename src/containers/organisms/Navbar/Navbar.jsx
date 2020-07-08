import React, { Component } from "react";
// import { Link } from "react-router-dom";
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
  // Form,
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
      author: "author",
      title: "title",
      asc: "ASC",
      desc: "DESC",
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

  handleSortGenre = async (event) => {
    await this.setState({
      genre: event.target.value,
    });
    this.props.getGenre(this.state.genre);
  };

  handleSortAuthor = async (event) => {
    await this.setState({
      author: event.target.value,
    });
    this.props.getAuthor(this.state.author);
  };

  handleSortTitle = async (event) => {
    await this.setState({
      title: event.target.value,
    });
    this.props.getAuthor(this.state.title);
  };

  handleSortAsc = async (event) => {
    await this.setState({
      asc: event.target.value,
    });
    this.props.getAsc(this.state.asc);
  };

  handleSortDesc = async (event) => {
    await this.setState({
      desc: event.target.value,
    });
    this.props.getDesc(this.state.desc);
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
                      onClick={this.handleSortGenre}
                    >
                      Genre
                    </DropdownItem>
                    <DropdownItem
                      value={this.state.author}
                      onClick={this.handleSortAuthor}
                    >
                      Author
                    </DropdownItem>
                    <DropdownItem
                      value={this.state.title}
                      onClick={this.handleSortTitle}
                    >
                      Title
                    </DropdownItem>
                    {/* <DropdownItem>Author</DropdownItem> */}
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret className={Styles.homeDropdown}>
                    All Time
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem
                      value={this.state.asc}
                      onClick={this.handleSortAsc}
                    >
                      A - Z
                    </DropdownItem>
                    <DropdownItem
                      value={this.state.desc}
                      onClick={this.handleSortDesc}
                    >
                      Z - A
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <InputGroup className={Styles.homeSearch}>
                  <InputGroupAddon addonType="prepend">
                    <Button type="submit" className={Styles.homeSearchButton}>
                      <FontAwesomeIcon icon={faSearch} />
                    </Button>
                  </InputGroupAddon>
                  <Input
                    type="text"
                    className={Styles.homeSearchInput}
                    value={this.state.search}
                    onChange={this.handleInputChange}
                    placeholder="Search Book"
                  />
                </InputGroup>
              </Nav>
            </Collapse>
            <NavbarBrand className={Styles.homeBrand}>
              <img
                href="/"
                src="http://localhost:3006/bookshelf-home.png"
                alt="home-logo"
              />
              <span>DOMSLibrary</span>
            </NavbarBrand>
          </Navbar>
        </Col>
      </>
    );
  }
}

export default Topnav;
