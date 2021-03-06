import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

import Styles from "../../styles/pages/Home/Home.module.css";

const BookCards = ({ image, title, description, id, genre, author }) => {
  return (
    <div>
      <Col className={Styles.homeCards}>
        <Link to={`/details/${id}`} className={Styles.cardLink}>
          <Card className={Styles.cardContent}>
            <CardImg
              top
              className={Styles.cardImage}
              src={`${process.env.REACT_APP_API_URL}images/${image}`}
              alt="book-image"
            />
            <CardBody className={Styles.cardBody}>
              <CardTitle className={Styles.cardTitle}>{title}</CardTitle>
              <CardText className={Styles.cardText}>{description}</CardText>
            </CardBody>
          </Card>
        </Link>
      </Col>
    </div>
  );
};

export default BookCards;
