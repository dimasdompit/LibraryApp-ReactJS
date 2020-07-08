import React, { Component } from "react";
import axios from "axios";
import {
  Table,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import jwtDecode from "jwt-decode";
import Moment from "react-moment";
import swal from "sweetalert";

/* REDUX */
import { connect } from "react-redux";
import { getUserById } from "../../../redux/actions/users";

import Styles from "../../../styles/pages/Home/Home.module.css";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      history: [],
      username: "",
      book: [],
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  getUserHistory = () => {
    // const token = localStorage.getItem("token");
    const token = this.props.auth.data.token;
    const decoded = jwtDecode(token);
    const userId = decoded.id;

    // axios({
    //   method: "GET",
    //   url: `http://localhost:3000/books/history/${userId}`,
    //   headers: {
    //     Authorization: token,
    //   },
    // })

    this.props
      .getUserById(token, userId)
      .then((response) => {
        this.setState({
          ...this.state,
          history: response.value.data.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  handleReturnBook = (id) => {
    // const token = localStorage.getItem("token");
    const token = this.props.auth.data.token;

    axios({
      method: "PUT",
      url: `http://localhost:3000/books/return/${id}`,
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
      .catch((err) => {
        console.log(err.response);
        swal({
          icon: "error",
          title: `${err.response.data.data}`,
          confirmButtonColor: "#000000",
        });
      });
  };

  componentDidMount() {
    this.getUserHistory();
  }

  render() {
    return (
      <>
        <p onClick={this.toggle}>History</p>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="modal-lg center text-center"
        >
          <ModalHeader toggle={this.toggle}>Borrow History</ModalHeader>
          <ModalBody>
            <Table striped responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Borrowed Books</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="align-items-center">
                {this.state.history.map((history, index) => {
                  return (
                    <tr key={history.history_id}>
                      <th scope="row">{index + 1}</th>
                      <td>{history.users}</td>
                      <td>{history.book}</td>
                      <td>
                        <Moment format="DD MMMM YYYY HH:mm">
                          {history.created_at}
                        </Moment>
                      </td>
                      <td>
                        {history.history_status === "borrow" ? (
                          <Button
                            color="warning"
                            onClick={(e) => {
                              e.preventDefault();
                              this.handleReturnBook(history.history_id);
                            }}
                          >
                            Return
                          </Button>
                        ) : (
                          <p className={Styles.historyStatus}>
                            <FontAwesomeIcon icon={faCheck} /> Returned
                          </p>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Back
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

// export default History;

const mapStateToProps = (state) => ({
  auth: state.auth,
  users: state.user,
});

const mapDispatchToProps = { getUserById };

export default connect(mapStateToProps, mapDispatchToProps)(History);
