import React, { Component } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderArrow from "../../../components/molecules/SliderArrow";
import BookSlider from "../../../components/molecules/BookSlider";

export default class HomeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  getAllBooks = () => {
    const token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: "http://localhost:3000/books/?sortBy=genre&sortType=ASC&limit=5",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        console.log(response);
        this.setState({
          books: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  componentDidMount() {
    this.getAllBooks();
  }

  render() {
    const settings = {
      className: "center",
      centerPadding: "60px",
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <SliderArrow />,
      nextArrow: <SliderArrow />,
    };

    return (
      <>
        <Slider {...settings}>
          {this.state.books.map((book) => {
            return (
              <BookSlider
                key={book.id}
                id={book.id}
                image={book.image}
                title={book.title}
                author={book.author}
              />
            );
          })}
        </Slider>
      </>
    );
  }
}
