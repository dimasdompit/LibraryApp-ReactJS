import React, { Component } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { connect } from "react-redux";
import { getBooks } from "../../../redux/actions/book";

import SliderArrow from "../../../components/molecules/SliderArrow";
import BookSlider from "../../../components/molecules/BookSlider";

class HomeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  getAllBooks = () => {
    const token = this.props.auth.data.token;
    // const token = localStorage.getItem("token");
    const categories = ["title", "genre", "author", "created_at", "status"];
    const category = categories[Math.floor(Math.random() * categories.length)];

    const params = {
      sortBy: category,
      sortType: "ASC",
      limit: 5,
      page: 1,
    };

    const qs = Object.keys(params)
      .map((key) => key + "=" + params[key])
      .join("&");

    axios({
      method: "GET",
      url: `http://localhost:3000/books/?${qs}`,
      headers: {
        Authorization: token,
      },
    })
      // this.props
      //   .getBooks(token, qs)
      .then((response) => {
        this.setState({
          books: response.data.data.result,
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

// export default HomeSlider;

const mapStateToProps = (state) => ({
  auth: state.auth,
  book: state.book,
});

const mapDispatchToProps = { getBooks };

export default connect(mapStateToProps, mapDispatchToProps)(HomeSlider);
