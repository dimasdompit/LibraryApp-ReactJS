import React, { Component } from "react";
// import { Row, Col, Container, Button } from "reactstrap";
// import { Link } from "react-router-dom";
import axios from "axios";
import BookDetailsById from "../../organisms/BookDetailById/BookDetailsById";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// import ModalEdit from "../../organisms/Modals/ModalEdit";
// import ModalDelete from "../../organisms/Modals/ModalDelete";

// import Styles from "../../../styles/pages/BookDetails/BookDetails.module.css";

class BookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  getBookDetails = () => {
    const token = localStorage.getItem("token");
    const id = this.props.match.params.id;
    axios({
      method: "GET",
      url: "http://localhost:3000/books/" + id,
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        // console.log(response.data.data);
        this.setState({
          books: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
        window.location.pathname = "/login";
      });
  };

  componentDidMount() {
    this.getBookDetails();
  }

  render() {
    // const heroStyles = {
    //   width: "100%",
    //   height: "23rem",
    //   background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${this.state.image}) no-repeat center`,
    //   backgroundSize: "cover",
    // };

    return (
      <>
        <div className="detail-section">
          {this.state.books.map((book) => {
            return (
              <BookDetailsById
                key={book.id}
                id={book.id}
                title={book.title}
                image={book.image}
                description={book.description}
                genre={book.genre}
                date={book.created_at}
                status={book.status}
                author={book.author}
                genre={book.genre}
              />
            );
          })}
          {/* <Container fluid style={heroStyles}>
            <div className="detailBanner">
              <section style={{ width: "100%", height: "23rem" }}>
                <section className={Styles.detailTopMenu}>
                  <Link to="/">
                    <section className={Styles.detailButtonBack}>
                      <FontAwesomeIcon icon={faArrowLeft} />
                    </section>
                  </Link>
                  <section className={Styles.detailLink}>
                    <span className={Styles.detailLink}>
                      <ModalEdit
                        text="Edit"
                        className={Styles.detailModalEdit}
                      />
                    </span>
                    <span className={Styles.detailLink}>
                      <ModalDelete text="Delete" />
                    </span>
                  </section>
                </section>
              </section>
            </div>
            <div className={Styles.detailContent}>
              <div className={Styles.detailLeft}>
                <Row>
                  <Col lg="6">
                    <h6 className={Styles.detailGenre}>{this.state.genre}</h6>
                    <h2 className={Styles.detailTitle}>{this.state.title}</h2>
                    <p className={Styles.detailDate}>{this.state.date}</p>
                  </Col>
                  <Col lg="6">
                    <h5 className={Styles.detailStatus}>{this.state.status}</h5>
                  </Col>
                </Row>
                <Row>
                  <Col lg="8">
                    <p className={Styles.detailDescription}>
                      {this.state.description}
                    </p>
                  </Col>
                  <Col lg="4">
                    <div className={Styles.detailBookImage}>
                      <img src={this.state.image} alt="book-image" />
                    </div>
                    <div className={Styles.detailBorrow}>
                      <Button color="warning" className={Styles.btnBorrow}>
                        Borrow
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Container> */}
        </div>
      </>
    );
  }
}

export default BookDetails;
