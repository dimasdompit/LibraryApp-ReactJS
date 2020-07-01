import React, { Component } from "react";
import { Row, Col, Container, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Moment from "react-moment";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import ModalEdit from "../../organisms/Modals/ModalEdit";
import ModalDelete from "../../organisms/Modals/ModalDelete";

import Styles from "../../../styles/pages/BookDetails/BookDetails.module.css";
// import BookDetails from "../../pages/BookDetails/BookDetail";

class BookDetailsById extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.status,
    };
  }

  handleBorrowBooks = (event) => {
    event.preventDefault();
  };

  render() {
    const heroStyles = {
      width: "100%",
      height: "23rem",
      background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(http://localhost:3000/images/${this.props.image}) no-repeat center`,
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
                  <span className={Styles.detailLink}>
                    <ModalEdit
                      text="Edit"
                      className={Styles.detailModalEdit}
                      title={this.props.title}
                      image={this.props.image}
                      description={this.props.description}
                      genre_id={this.props.genre_id}
                      author_id={this.props.author_id}
                      status={this.props.status}
                      id={this.props.id}
                    />
                  </span>
                  <span className={Styles.detailLink}>
                    <ModalDelete
                      text="Delete"
                      id={this.props.id}
                      title={this.props.title}
                    />
                  </span>
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
                      <Button color="warning" className={Styles.btnBorrow}>
                        Borrow
                      </Button>
                    ) : (
                      <Button color="warning" className={Styles.btnBorrow}>
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
