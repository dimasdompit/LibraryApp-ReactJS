import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Row,
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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Sidebar from "../../organisms/Sidebar/Sidebar";
// import HomeSlider from "../../organisms/Slider/Slider";
import BookCards from "../../../components/molecules/BookCards";
import BookSlider from "../../organisms/Slider/Slider";
// import TopNav from "../../organisms/Navbar/Navbar";
// import Card from "../../organisms/Card/Card";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      query: "",
      books: [],
      filteredData: [],
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleInputChange = (event) => {
    event.preventDefault();

    this.setState({
      query: event.target.value,
    });
    //   const query = event.target.value;
    //   this.setState((prevState) => {
    //     const filteredData = prevState.books.filter((element) => {
    //       return element.title.toLowerCase().includes(query.toLowerCase());
    //     });
    //     return {
    //       query,
    //       filteredData,
    //     };
    //   });
  };

  getAllBooks = () => {
    const token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: "http://localhost:3000/books",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        console.log(response.data);
        this.setState({
          books: response.data.data,
          isLogin: true,
        });
      })
      // .then((data) => {
      //   const { query } = this.state;
      //   const filteredData = data.filter((element) => {
      //     return element.title.toLowerCase().includes(query.toLowerCase());
      //   });
      // })
      .catch((error) => {
        console.log(error.response);
      });
  };

  componentDidMount() {
    this.getAllBooks();
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
      <>
        <Container fluid>
          <Row className={Styles.homeDashboard}>
            <Col md="3" sm="3" className={Styles.homeSidebar}>
              <Sidebar />
            </Col>
            <Col md="9" sm="9" className={Styles.homeBody}>
              <Container fluid>
                <Row>
                  <Col className={Styles.navbarArea}>
                    <Navbar light expand="md" className={Styles.homeTopnav}>
                      <NavbarToggler onClick={this.toggle} />
                      <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                          <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle
                              nav
                              caret
                              className={Styles.homeDropdown}
                            >
                              All Categories
                            </DropdownToggle>
                            <DropdownMenu right>
                              <DropdownItem>Title</DropdownItem>
                              <DropdownItem>Genre</DropdownItem>
                              <DropdownItem>Author</DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                          <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle
                              nav
                              caret
                              className={Styles.homeDropdown}
                            >
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
                </Row>
                <div className={Styles.homeContent}>
                  <Row>
                    {/* ===== SLIDER AREA ===== */}
                    <Col className={Styles.homeSlider}>
                      <BookSlider />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h4>List Books</h4>
                      <hr />
                    </Col>
                  </Row>
                  <Row className={Styles.cardRow}>
                    {/* <Card /> */}
                    {/* ====== CARDS AREA ======= */}
                    {this.state.books.map((book) => {
                      return (
                        <BookCards
                          key={book.id}
                          id={book.id}
                          image={book.image}
                          title={book.title}
                          description={`${book.description.substring(
                            0,
                            80
                          )}...`}
                        />
                      );
                    })}
                  </Row>
                </div>
              </Container>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
