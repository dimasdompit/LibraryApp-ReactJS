import React, { Component } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { Container, Row, Col, Button } from "reactstrap";
import queryString from "query-string";
import Styles from "../../../styles/pages/Home/Home.module.css";

/* REDUX SETUP */
import { connect } from "react-redux";
import { logout } from "../../../redux/actions/auth";
import { getBooks } from "../../../redux/actions/book";
import { getGenre } from "../../../redux/actions/genre";
import { getAuthor } from "../../../redux/actions/author";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

import Topnav from "../../organisms/Navbar/Navbar";
import Sidebar from "../../organisms/Sidebar/Sidebar";
import BookCards from "../../../components/molecules/BookCards";
import BookSlider from "../../organisms/Slider/Slider";
import LoadingScreen from "../../organisms/Loading/Loading";
import { Redirect } from "react-router-dom";

// import auth from "../../../redux/reducers/auth";

// import HomeSlider from "../../organisms/Slider/Slider";
// import Card from "../../organisms/Card/Card";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      search: "",
      sort: "",
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
    this.props.logout();
    this.props.history.push("/login");
  };

  handleSort = (sort, order) => {
    // const token = localStorage.getItem("token");
    const token = this.props.auth.data.token;

    const sorted = {
      sortBy: sort,
      sortType: order,
    };

    const qs = Object.keys(sorted)
      .map((key) => key + "=" + sorted[key])
      .join("&");

    /* GET ALL BOOKS REDUX */
    this.props
      .getBooks(token, qs)
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  handleParams = (params) => {
    // this.props.history.push(`/?search=${params}`);
    // console.log(this.props.location);
    // const token = localStorage.getItem("token");
    const token = this.props.auth.data.token;

    const search = {
      search: params,
    };

    const qs = Object.keys(search)
      .map((key) => key + "=" + search[key])
      .join("&");

    // this.props.history();
    this.props
      .getBooks(token, qs)
      .then((response) => {
        console.log(response);
        // const data = response.value.data.data.result;
        // console.log(data);
        // this.setState({
        //   books: response.data.data.result,
        // });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  checkAuth = () => {
    // const token = localStorage.getItem("token");
    const token = this.props.auth.data.token;
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
    // let token = localStorage.getItem("token");
    /* REDUX CONFIG TOKEN */
    const token = this.props.auth.data.token;
    /* ================= */
    const pagination = {
      limit: this.state.pagination.limit,
      page: this.state.pagination.page,
    };
    const qs = Object.keys(pagination)
      .map((key) => key + "=" + pagination[key])
      .join("&");

    this.props
      .getBooks(token, qs)
      .then((response) => {
        let totalData = response.value.data.data.totalBooks;
        const totalPage = totalData / this.state.pagination.limit;
        let pages = [];
        for (let i = 0; i < totalPage; i++) {
          pages.push(i);
        }

        const data = response.value.data.data.result;
        this.setState({
          ...this.state,
          books: data,
          pagination: {
            page: this.state.pagination.page,
            limit: this.state.pagination.limit,
            totalPage: pages,
          },
        });
      })
      .catch((error) => {
        console.log(error);
        // this.props.history.push("/login");
        // this.props.logout();
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
        let qs = queryString.parse(this.props.history.location.search);
        qs.page = qs.page || 1;
        console.log(qs.page);
        if (this.props.history.location.search === "") {
          this.props.history.push(`/?page=${parseInt(qs.page)}`);
        } else {
          if (qs.page) {
            const url = this.props.history.location.search.replace(
              `page=${qs.page}`,
              `page=${parseInt(qs.page)}`
            );
            this.props.history.push(url);
          } else {
            this.props.history.push(
              `${this.props.history.location.search}&page=${parseInt(qs.page)}`
            );
          }
        }

        this.getAllBooks();
      }
    );
  };

  /* =========== GET ALL GENRE ============ */
  getAllGenre = () => {
    const token = this.props.auth.data.token;

    this.props
      .getGenre(token)
      .then((response) => {
        this.setState({
          genre: response.value.data.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  /* =========== GET ALL AUTHOR ============ */
  getAllAuthor = () => {
    const token = this.props.auth.data.token;

    this.props
      .getAuthor(token)
      .then((response) => {
        this.setState({
          author: response.value.data.data,
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
      <Container fluid>
        <Row className={Styles.homeDashboard}>
          <Col md="3" sm="4" className={Styles.homeSidebar}>
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
          <Col md="9" sm="8" className={Styles.homeBody}>
            <Container fluid>
              <Row>
                {/* <Topnav /> */}
                {/* ===== NAVBAR AREA ===== */}
                <Topnav
                  genre={this.state.genre}
                  author={this.state.author}
                  getGenre={this.handleSort}
                  getAuthor={this.handleSort}
                  getTitle={this.handleSort}
                  getAsc={this.handleSort}
                  getDesc={this.handleSort}
                  // search={this.state.search}
                  history={this.props.history}
                  handleState={this.handleParams}
                  handleStateSort={this.handleSort}
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
                  {/* ====== CARDS AREA ======= */}
                  {this.props.book.data.result.map((book) => {
                    return (
                      <BookCards
                        key={book.id}
                        id={book.id}
                        author={book.author}
                        genre={book.genre}
                        image={book.image}
                        title={book.title}
                        description={`${book.description.substring(0, 80)}...`}
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
    );
  }
}

// export default Home;

const mapStateToProps = (state) => ({
  auth: state.auth,
  book: state.book,
  genre: state.genre,
  author: state.author,
});

const mapDispatchToProps = { logout, getBooks, getGenre, getAuthor };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
