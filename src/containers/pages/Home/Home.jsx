import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  // Collapse,
  // Nav,
  // Navbar,
  // NavbarBrand,
  // NavbarToggler,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // Input,
  // InputGroup,
  // InputGroupAddon,
  // Button,
  // Form,
} from "reactstrap";
import Styles from "../../../styles/pages/Home/Home.module.css";
// import LoadingScreen from "../../organisms/Loading/Loading";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Topnav from "../../organisms/Navbar/Navbar";
import Sidebar from "../../organisms/Sidebar/Sidebar";
import BookCards from "../../../components/molecules/BookCards";
import BookSlider from "../../organisms/Slider/Slider";
// import HomeSlider from "../../organisms/Slider/Slider";
// import TopNav from "../../organisms/Navbar/Navbar";
// import Card from "../../organisms/Card/Card";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      query: "",
      books: [],
      filteredData: [],
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleInputChange = (event) => {
    event.preventDefault();

    this.setState({
      query: event.target.value,
    });
    //   const query = event.target.value;
    //   this.setState((prevState) => {
    //     const filteredData = prevState.books.filter((element) => {
    //       return element.title.toLowerCase().includes(query.toLowerCase());
    //     });
    //     return {
    //       query,
    //       filteredData,
    //     };
    //   });
  };

  getAllBooks = () => {
    const token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: "http://localhost:3000/books",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        console.log(response.data);
        this.setState({
          books: response.data.data,
          isLoggedIn: true,
        });
      })
      // .then((data) => {
      //   const { query } = this.state;
      //   const filteredData = data.filter((element) => {
      //     return element.title.toLowerCase().includes(query.toLowerCase());
      //   });
      // })
      .catch((error) => {
        console.log(error.response);
      });
  };

  componentDidMount() {
    this.getAllBooks();
  }

  render() {
    // const { isLoggedIn } = this.state;

    // if (!isLoggedIn) {
    //   return <Redirect to="/login" />;
    // }
    return (
      <>
        <Container fluid>
          <Row className={Styles.homeDashboard}>
            <Col md="3" sm="3" className={Styles.homeSidebar}>
              {/* ===== SIDEBAR AREA ===== */}
              <Sidebar />
            </Col>
            <Col md="9" sm="9" className={Styles.homeBody}>
              <Container fluid>
                <Row>
                  {/* ===== NAVBAR AREA ===== */}
                  <Topnav />
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
                </div>
              </Container>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
