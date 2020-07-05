import React, { Component } from "react";
import { Row, Col, Container, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import axios from "axios";
import jwtDecode from "jwt-decode";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import ModalEdit from "../../organisms/Modals/ModalEdit";
import ModalDelete from "../../organisms/Modals/ModalDelete";

import swal from "sweetalert";
import Styles from "../../../styles/pages/BookDetails/BookDetails.module.css";
// import BookDetails from "../../pages/BookDetails/BookDetail";

class BookDetailsById extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: [],
      genres: [],
      roles: "",
    };
  }

  /* ======== GET ALL GENRE ======== */
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
        this.setState({
          genres: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  /* ======== GET ALL AUTHOR ======= */
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
        this.setState({
          authors: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  /* ======== CHECK AUTH ======= */
  checkAuth = () => {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    this.setState({
      ...this.state,
      roles: decoded.roles,
    });
  };

  handleBorrowBooks = (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");
    event.preventDefault();
    const id = this.props.id;

    axios({
      method: "PUT",
      url: "http://localhost:3000/books/borrow/" + id,
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        console.log(response);
        swal({
          icon: "success",
          title: `${response.data.data}`,
          showConfirmaButton: false,
          timer: 3000,
        });
      })
      .then(() => {
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((error) => {
        console.log(error.response);
        swal({
          icon: "error",
          title: `${error.response.data.data}`,
          confirmButtonColor: "#000000",
        });
      });
  };

  handleReturnBooks = (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");
    event.preventDefault();
    const id = this.props.id;

    axios({
      method: "PUT",
      url: "http://localhost:3000/books/return/" + id,
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        console.log(response);
        swal({
          icon: "success",
          title: `${response.data.data}`,
          showConfirmaButton: false,
          timer: 3000,
        });
      })
      .then(() => {
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((error) => {
        console.log(error.response);
        swal({
          icon: "error",
          title: `${error.response.data.data}`,
          confirmButtonColor: "#000000",
        });
      });
  };

  componentDidMount() {
    this.checkAuth();
    this.getAllAuthor();
    this.getAllGenre();
  }

  render() {
    const heroStyles = {
      width: "100%",
      height: "23rem",
      backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(http://localhost:3000/images/${this.props.image})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    };

    return (
      <>
        <Container fluid style={heroStyles}>
          <div className="detailBanner">
            <section style={{ width: "100%", height: "23rem" }}>
              <section className={Styles.detailTopMenu}>
                <Link to="/">
                  <section className={Styles.detailButtonBack}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </section>
                </Link>
                <section className={Styles.detailLink}>
                  {this.state.roles === "admin" ||
                  this.state.roles === "staff" ? (
                    <span className={Styles.detailLink}>
                      <ModalEdit
                        text="Edit"
                        className={Styles.detailModalEdit}
                        title={this.props.title}
                        image={this.props.image}
                        description={this.props.description}
                        genre={this.props.genre}
                        genres={this.state.genres}
                        author={this.props.author}
                        authors={this.state.authors}
                        status={this.props.status}
                        id={this.props.id}
                      />
                    </span>
                  ) : (
                    ""
                  )}

                  {this.state.roles === "admin" ? (
                    <span className={Styles.detailLink}>
                      <ModalDelete
                        text="Delete"
                        id={this.props.id}
                        title={this.props.title}
                      />
                    </span>
                  ) : (
                    ""
                  )}
                </section>
              </section>
            </section>
          </div>
          <div className={Styles.detailContent}>
            <div className={Styles.detailLeft}>
              <Row>
                <Col lg="6">
                  <h6 className={Styles.detailGenre}>{this.props.genre}</h6>
                  <h2 className={Styles.detailTitle}>{this.props.title}</h2>
                  <p className={Styles.detailDate}>
                    <Moment format="MMMM DD, YYYY">{this.props.date}</Moment>
                  </p>
                </Col>
                <Col lg="6">
                  <h5 className={Styles.detailStatus}>{this.props.status}</h5>
                </Col>
              </Row>
              <Row>
                <Col lg="8">
                  <p className={Styles.detailDescription}>
                    {this.props.description}
                  </p>
                </Col>
                <Col lg="4">
                  <div className={Styles.detailBookImage}>
                    <img
                      src={`http://localhost:3000/images/${this.props.image}`}
                      alt="book-image"
                    />
                  </div>
                  <div className={Styles.detailBorrow}>
                    {this.props.status === "Available" ? (
                      <Button
                        onClick={this.handleBorrowBooks}
                        color="warning"
                        className={Styles.btnBorrow}
                      >
                        Borrow
                      </Button>
                    ) : (
                      <Button
                        onClick={this.handleReturnBooks}
                        color="warning"
                        className={Styles.btnBorrow}
                      >
                        Return
                      </Button>
                    )}
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default BookDetailsById;
