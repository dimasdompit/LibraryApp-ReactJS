import React, { Component } from "react";
// import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { connect } from "react-redux";
import { logout } from "../../../redux/actions/auth";
import { Container, Row, Col, Button } from "reactstrap";
import Styles from "../../../styles/pages/Home/Home.module.css";
// import LoadingScreen from "../../organisms/Loading/Loading";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

import Topnav from "../../organisms/Navbar/Navbar";
import Sidebar from "../../organisms/Sidebar/Sidebar";
import BookCards from "../../../components/molecules/BookCards";
import BookSlider from "../../organisms/Slider/Slider";

import auth from "../../../redux/reducers/auth";

// import HomeSlider from "../../organisms/Slider/Slider";
// import Card from "../../organisms/Card/Card";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      id: "",
      username: "",
      roles: "",
      books: [],
      genre: [],
      author: [],
      status: [
        { id: 1, name: "Available" },
        { id: 2, name: "Not Available" },
      ],
      pagination: {
        page: 1,
        limit: 6,
        totalPage: [],
      },
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleLogout = () => {
    // localStorage.removeItem("token");
    // localStorage.removeItem("refreshToken");
    this.props.logout();
    this.props.history.push("/login");
  };

  handleSortGenre = (dropdown) => {
    this.props.history.push(`/?sortBy=${dropdown}`);
    const token = localStorage.getItem("token");
    // const token = this.props.auth.data.token;
    axios({
      method: "GET",
      url: `http://localhost:3000/books/?sortBy=${dropdown}`,
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        this.setState({
          books: response.data.data.result,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleParams = (params) => {
    this.props.history.push(`/?search=${params}`);
    const token = localStorage.getItem("token");
    // const token = this.props.auth.data.token;

    axios({
      method: "GET",
      url: `http://localhost:3000/books/?search=${params}`,
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        this.setState({
          books: response.data.data.result,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  checkAuth = () => {
    const token = localStorage.getItem("token");
    // const token = this.props.auth.data.token;
    const decoded = jwtDecode(token);
    this.setState({
      ...this.state,
      id: decoded.id,
      username: decoded.username,
      roles: decoded.roles,
    });
  };

  /* ======== GET ALL BOOKS ========= */
  getAllBooks = () => {
    /* REDUX CONFIG TOKEN */
    const token = this.props.auth.data.token;
    /* ================= */
    // let token = localStorage.getItem("token");
    const pagination = {
      limit: this.state.pagination.limit,
      page: this.state.pagination.page,
    };
    const qs = Object.keys(pagination)
      .map((key) => key + "=" + pagination[key])
      .join("&");
    axios({
      method: "GET",
      url: `http://localhost:3000/books/?${qs}`,
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        let totalData = response.data.data["COUNT(*)"];
        const totalPage = totalData / this.state.pagination.limit;
        let pages = [];
        for (let i = 0; i < totalPage; i++) {
          pages.push(i);
        }
        this.setState({
          ...this.state,
          books: response.data.data.result,
          pagination: {
            page: this.state.pagination.page,
            limit: this.state.pagination.limit,
            totalPage: pages,
          },
        });
      })
      .catch((error) => {
        console.log(error.response);
        // this.props.history.push("/login");
        // window.location.pathname = "/login";
      });
  };

  getBooksPerPage = (page) => {
    this.setState(
      {
        ...this.state,
        pagination: {
          page: page,
          limit: this.state.pagination.limit,
          totalPage: this.state.pagination.totalPage,
        },
      },
      () => {
        this.getAllBooks();
      }
    );
  };

  /* =========== GET ALL GENRE ============ */
  getAllGenre = () => {
    let token = localStorage.getItem("token");
    // const token = this.props.auth.data.token;

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
    // const token = this.props.auth.data.token;

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
    this.checkAuth();
    this.getAllBooks();
    this.getAllGenre();
    this.getAllAuthor();
  }

  render() {
    return (
      <>
        <Container fluid>
          <Row className={Styles.homeDashboard}>
            <Col md="3" sm="3" className={Styles.homeSidebar}>
              {/* ===== SIDEBAR AREA ===== */}
              <Sidebar
                userId={this.state.id}
                genre={this.state.genre}
                author={this.state.author}
                status={this.state.status}
                username={this.state.username}
                roles={this.state.roles}
                onClick={this.handleLogout}
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
                  <Row className="d-flex justify-content-center mt-5">
                    {/* PAGINTATION */}
                    <Button
                      color="warning"
                      className="mr-1"
                      onClick={() =>
                        this.getBooksPerPage(this.state.pagination.page - 1)
                      }
                      disabled={this.state.pagination.page === 1 ? true : false}
                    >
                      <FontAwesomeIcon icon={faAngleDoubleLeft} />
                    </Button>
                    {this.state.pagination.totalPage.map((page) => {
                      return (
                        <Button
                          className="mr-1 ml-1"
                          key={page}
                          color="warning"
                          onClick={() => {
                            this.getBooksPerPage(page + 1);
                          }}
                        >
                          {page + 1}
                        </Button>
                      );
                    })}

                    <Button
                      color="warning"
                      className="ml-1"
                      onClick={() =>
                        this.getBooksPerPage(this.state.pagination.page + 1)
                      }
                      disabled={
                        this.state.pagination.page ===
                        this.state.pagination.totalPage.length
                          ? true
                          : false
                      }
                    >
                      <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </Button>
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

// export default Home;

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
