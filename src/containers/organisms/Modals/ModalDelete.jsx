import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";
import axios from "axios";
import { connect } from "react-redux";
import { deleteBooks } from "../../../redux/actions/book";

import swal from "sweetalert";

import {
  modalTitle,
  deleteButton,
} from "../../../styles/organism/ModalDelete.module.css";
// import state from "sweetalert/typings/modules/state";

class ModalDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  handleDeleteBooks = (event) => {
    event.preventDefault();
    const token = this.props.auth.data.token;
    // const token = localStorage.getItem("token");
    const id = this.props.id;
    const title = this.props.title;

    // axios({
    //   method: "DELETE",
    //   url: "http://localhost:3000/books/" + id,
    //   headers: {
    //     Authorization: token,
    //   },
    // })
    this.props
      .deleteBooks(token, id)
      .then((response) => {
        console.log(response);
        swal({
          icon: "success",
          title: `'${title}' is Successfully Deleted`,
          showConfirmaButton: false,
          timer: 2500,
        });
      })
      .then(() => {
        setTimeout(() => {
          window.location.assign("/");
        }, 2500);
      })
      .catch((error) => {
        console.log(error.response);
        swal({
          icon: "error",
          title: "Something went wrong!",
          confirmButtonColor: "#000000",
        });
      });
  };

  render() {
    return (
      <div>
        <div onClick={this.toggle}>{this.props.text}</div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle} charCode="x"></ModalHeader>
          <ModalBody>
            <h3 className={modalTitle}>
              Are you sure want to delete this book?
            </h3>
            <Button onClick={this.handleDeleteBooks} className={deleteButton}>
              Yes
            </Button>
            <Button onClick={this.toggle} className="btn-secondary">
              No
            </Button>
            {/* <FontAwesomeIcon icon={faCheckCircle} className={iconStyle} />
            <h4 className={notifStyle}>Data Dilan 1990 berhasil dihapus!</h4> */}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

// export default ModalDelete;
const mapStateToProps = (state) => ({
  auth: state.auth,
  book: state.book,
});

const mapDispatchToProps = { deleteBooks };

export default connect(mapStateToProps, mapDispatchToProps)(ModalDelete);
