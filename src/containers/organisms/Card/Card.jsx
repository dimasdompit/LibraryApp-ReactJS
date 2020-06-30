// import React, { Component } from "react";
// import axios from "axios";
// import BookCards from "../../../components/molecules/BookCards";

// class CardBooks extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       books: [],
//     };
//   }

//   getAllBooks = () => {
//     const token = localStorage.getItem("token");
//     axios({
//       method: "GET",
//       url: "http://localhost:3000/books",
//       headers: {
//         Authorization: token,
//       },
//     })
//       .then((response) => {
//         console.log(response);
//         this.setState({
//           books: response.data.data,
//         });
//       })
//       .catch((error) => {
//         console.log(error.response);
//       });
//   };

//   componentDidMount() {
//     this.getAllBooks();
//   }

//   render() {
//     return (
//       <>
//         {this.state.books.map((book) => {
//           return (
//             <BookCards
//               key={book.id}
//               image={book.image}
//               title={book.title}
//               description={`${book.description.substring(0, 80)}...`}
//             />
//           );
//         })}
//       </>
//     );
//   }
// }

// export default CardBooks;
