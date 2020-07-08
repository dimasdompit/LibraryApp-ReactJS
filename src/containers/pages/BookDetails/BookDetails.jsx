import React, { Component } from "react";
// import axios from "axios";
import { connect } from "react-redux";
import { getBooksById } from "../../../redux/actions/book";
import BookDetailsById from "../../organisms/BookDetailById/BookDetailsById";

class BookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  getBookDetails = () => {
    // const token = localStorage.getItem("token");
    const token = this.props.auth.data.token;
    const id = this.props.match.params.id;

    // axios({
    //   method: "GET",
    //   url: "http://localhost:3000/books/" + id,
    //   headers: {
    //     Authorization: token,
    //   },
    // })

    this.props
      .getBooksById(token, id)
      .then((response) => {
        // console.log(response.data.data);
        this.setState({
          books: response.value.data.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
        this.props.history.push("/login");
      });
  };

  componentDidMount() {
    this.getBookDetails();
  }

  render() {
    // console.log(this.props.match);
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
                // genre={this.state.genre}
              />
            );
          })}
        </div>
      </>
    );
  }
}

// export default BookDetails;

const mapStateToProps = (state) => ({
  auth: state.auth,
  book: state.book,
});

const mapDispatchToProps = { getBooksById };

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
