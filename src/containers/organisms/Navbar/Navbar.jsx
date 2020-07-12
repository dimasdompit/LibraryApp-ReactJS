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
  Form,
} from "reactstrap";

import queryString from "query-string";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// import SearchBar from "../../../components/molecules/SearchBar";

import Styles from "../../../styles/pages/Home/Home.module.css";
import { createLogger } from "redux-logger";

class Topnav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      search: "",
      sort: "",
      order: "",
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

  // handleInputChange = async (event) => {
  //   await this.setState({
  //     search: event.target.value,
  //   });
  //   this.props.handleState(this.state.search);
  // };

  handleSearch = (event) => {
    // event.preventDefault();
    // console.log(this.props.history.location.search);
    // if (event.keyCode === 13) {
    //   this.props.history.push(`/?search=${this.state.search}`);
    //   this.props.handleState(this.state.search);
    // }
    // console.log(this.props.history.location);
    if (event.keyCode === 13) {
      if (this.props.history.location.search === "") {
        this.props.history.push(`/?search=${this.state.search}`);
      } else {
        let qs = queryString.parse(this.props.history.location.search);
        if (qs.search) {
          const url = this.props.history.location.search.replace(
            `search=${qs.search}`,
            `search=${this.state.search}`
          );
          this.props.history.push(url);
        } else {
          this.props.history.push(
            `${this.props.history.location.search}$search=${this.state.search}`
          );
        }
      }
      this.props.handleState(this.state.search);
    }
  };

  handleSort = () => {
    let sort = this.state.sort;
    let order = this.state.order;

    if (this.props.history.location.search === "") {
      this.props.history.push(`/?sortBy=${sort}&sortType=${order}`);
    } else {
      let qs = queryString.parse(this.props.history.location.search);
      if (qs.sortBy || qs.sortType) {
        this.props.history.push(
          this.props.history.location.search
            .replace(`sortBy=${qs.sortBy}`, `sortBy=${sort}`)
            .replace(`sortType=${qs.sortType}`, `sortType=${order}`)
        );
      } else {
        this.props.history.push(
          `${this.props.history.location.search}$sortBy=${sort}&sortType=${order}`
        );
      }
      this.props.handleStateSort(this.state.sort, this.state.order);
    }
  };

  // handleSortGenre = async (event) => {
  //   await this.setState({
  //     sort: event.target.value,
  //   });
  //   this.props.getGenre(this.state.genre, this.state.asc);
  // };

  // handleSortAuthor = async (event) => {
  //   await this.setState({
  //     sort: event.target.value,
  //   });
  //   this.props.getAuthor(this.state.author, this.state.asc);
  // };

  // handleSortTitle = async (event) => {
  //   await this.setState({
  //     sort: event.target.value,
  //   });
  //   this.props.getAuthor(this.state.title, this.state.asc);
  // };

  // handleSortAsc = async (event) => {
  //   await this.setState({
  //     asc: event.target.value,
  //   });
  //   this.props.getAsc(this.state.sort, this.state.asc);
  // };

  // handleSortDesc = async (event) => {
  //   await this.setState({
  //     desc: event.target.value,
  //   });
  //   this.props.getDesc(this.state.sort, this.state.desc);
  // };

  render() {
    return (
      <>
        <Col className={Styles.navbarArea}>
          <Navbar light expand="md" className={Styles.homeTopnav}>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <Form
                  className="d-flex flex-row"
                  onSubmit={() =>
                    this.props.history.push(
                      `${this.props.history.location.search}$sortBy=${this.state.sort}&sortType=${this.state.order}`
                    )
                  }
                >
                  <Input
                    type="select"
                    className={`${Styles.homeDropdownCategories} mr-2`}
                    name="sortBy"
                    onChange={(e) => this.setState({ sort: e.target.value })}
                    value={this.state.sort}
                  >
                    <option value="">All Categories</option>
                    <option value="title">Title</option>
                    <option value="genre">Genre</option>
                    <option value="author">Author</option>
                  </Input>
                  <Input
                    type="select"
                    name="sortType"
                    className={`${Styles.homeDropdownTime} mr-2`}
                    onChange={(e) => this.setState({ order: e.target.value })}
                    value={this.state.order}
                  >
                    <option value="">All Time</option>
                    <option value="asc">A - Z</option>
                    <option value="desc">Z - A</option>
                  </Input>
                  <input type="hidden" name="page" value={1} />
                  <Button
                    className={`${Styles.homeDropdownBtn}`}
                    color="warning"
                    onClick={() => this.handleSort()}
                  >
                    Sort
                  </Button>
                </Form>
                {/* <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret className={Styles.homeDropdown}>
                    All Categories
                  </DropdownToggle>
                  <DropdownMenu right>
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
                </UncontrolledDropdown> */}
              </Nav>
              <InputGroup className={`${Styles.homeSearch} mr-5 ml-5`}>
                {/* <InputGroupAddon addonType="prepend">
                  <Button type="submit" className={Styles.homeSearchButton}>
                    <FontAwesomeIcon icon={faSearch} />
                  </Button>
                </InputGroupAddon> */}
                <Input
                  type="text"
                  className={Styles.homeSearchInput}
                  value={this.state.search}
                  // onChange={this.handleInputChange}
                  onChange={(e) => this.setState({ search: e.target.value })}
                  onKeyDown={(e) => this.handleSearch(e)}
                  placeholder={"Search Book"}
                />
              </InputGroup>
            </Collapse>
            <NavbarBrand className={Styles.homeBrand}>
              <img
                href="/"
                src="http://localhost:3006/bookshelf-home.png"
                alt="home-logo"
              />
              {/* <span>DOMSLibrary</span> */}
            </NavbarBrand>
          </Navbar>
        </Col>
      </>
    );
  }
}

export default Topnav;
