import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  // Collapse,
  // Nav,
  // Navbar,
  // NavbarBrand,
  // NavbarToggler,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // Input,
  // InputGroup,
  // InputGroupAddon,
  // Button,
  // Form,
} from "reactstrap";
import Styles from "../../../styles/pages/Home/Home.module.css";
// import LoadingScreen from "../../organisms/Loading/Loading";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Topnav from "../../organisms/Navbar/Navbar";
import Sidebar from "../../organisms/Sidebar/Sidebar";
import BookCards from "../../../components/molecules/BookCards";
import BookSlider from "../../organisms/Slider/Slider";
// import HomeSlider from "../../organisms/Slider/Slider";
import TopNav from "../../organisms/Navbar/Navbar";
// import Card from "../../organisms/Card/Card";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      search: "",
      books: [],
      filteredData: [],
      isOpen: false,
      genre: "genre",
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleSortGenre = (dropdown) => {
    // this.props.history.push(`/?search=${params}`);
    console.log(dropdown);
    const token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: `http://localhost:3000/books/?sortBy=${dropdown}`,
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        this.setState({
          books: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleParams = (params) => {
    this.props.history.push(`/?search=${params}`);
    const token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: `http://localhost:3000/books/?search=${params}`,
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        this.setState({
          books: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
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
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  // getBooksBySearch = (event) => {
  // event.preventDefault();
  // const keyword = event.target.value;
  // const search = {
  //   title: keyword,
  //   author: keyword,
  //   genre: keyword,
  // };
  // const params = Object.keys(search)
  //   .map((key) => key + "=" + search[key])
  //   .join("&");
  // console.log(params);
  //   const token = localStorage.getItem("token");
  //   axios({
  //     method: "GET",
  //     url: `localhost:3000/books/?search=${keyword}`,
  //     headers: {
  //       Authorization: token,
  //     },
  //   })
  //     .then((response) => {
  //       this.setState({
  //         books: response.data.data,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  componentDidMount() {
    this.getAllBooks();
    // this.getBooksBySearch();
  }

  render() {
    console.log(this.props.location);
    // const { isLoggedIn } = this.state;

    // if (!isLoggedIn) {
    //   return <Redirect to="/login" />;
    // }
    return (
      <>
        <Container fluid>
          <Row className={Styles.homeDashboard}>
            <Col md="3" sm="3" className={Styles.homeSidebar}>
              {/* ===== SIDEBAR AREA ===== */}
              <Sidebar />
            </Col>
            <Col md="9" sm="9" className={Styles.homeBody}>
              <Container fluid>
                <Row>
                  {/* <Topnav /> */}
                  {/* ===== NAVBAR AREA ===== */}
                  {/* <Col className={Styles.navbarArea}>
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
                            <InputGroupAddon addonType="prepend">
                              <Button
                                type="submit"
                                className={Styles.homeSearchButton}
                              >
                                <FontAwesomeIcon icon={faSearch} />
                              </Button>
                            </InputGroupAddon> */}
                  {/* <Form> */}
                  {/* <Input
                              type="text"
                              className={Styles.homeSearchInput}
                              value={this.state.search}
                              onChange={this.getBooksBySearch}
                              placeholder="Search Book"
                            /> */}
                  {/* </Form> */}
                  {/* </InputGroup> */}
                  {/* <SearchBar
                            search={this.state.search}
                            onChange={this.props.onChange}
                          /> */}
                  {/* </Nav>
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
                  </Col> */}
                  <Topnav
                    genre={this.state.genre}
                    getGenre={this.handleSortGenre}
                    search={this.state.search}
                    handleState={this.handleParams}
                  />
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
