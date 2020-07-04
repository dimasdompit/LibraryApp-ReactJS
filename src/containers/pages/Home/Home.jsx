import React, { Component } from "react";
// import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
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
// import Card from "../../organisms/Card/Card";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      books: [],
      genre: [],
      author: [],
      status: [
        { id: 1, name: "Available" },
        { id: 2, name: "Not Available" },
      ],
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleSortGenre = (dropdown) => {
    this.props.history.push(`/?sortBy=${dropdown}`);
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

  /* ======== GET ALL BOOKS ========= */
  getAllBooks = () => {
    let token = localStorage.getItem("token");
    // let refreshToken = localStorage.getItem("refreshToken");

    /* REDUX CONFIG TOKEN */
    // const token = this.props.auth.data.token;
    /* ================= */

    axios({
      method: "GET",
      url: "http://localhost:3000/books",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        // console.log(response.data);
        this.setState({
          books: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
        window.location.pathname = "/login";
      });
  };

  /* =========== GET ALL GENRE ============ */
  getAllGenre = () => {
    let token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: "http://localhost:3000/genre",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        // console.log(response.data);
        this.setState({
          genre: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  /* =========== GET ALL AUTHOR ============ */
  getAllAuthor = () => {
    let token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: "http://localhost:3000/author",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        // console.log(response.data);
        this.setState({
          author: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  componentDidMount() {
    this.getAllBooks();
    this.getAllGenre();
    this.getAllAuthor();
  }

  render() {
    // console.log(this.props.auth.data);
    return (
      <>
        <Container fluid>
          <Row className={Styles.homeDashboard}>
            <Col md="3" sm="3" className={Styles.homeSidebar}>
              {/* ===== SIDEBAR AREA ===== */}
              <Sidebar
                genre={this.state.genre}
                author={this.state.author}
                status={this.state.status}
              />
            </Col>
            <Col md="9" sm="9" className={Styles.homeBody}>
              <Container fluid>
                <Row>
                  {/* <Topnav /> */}
                  {/* ===== NAVBAR AREA ===== */}
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
                          author={book.author}
                          genre={book.genre}
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
    // }
  }
}

export default Home;

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });

// export default connect(mapStateToProps)(Home);
