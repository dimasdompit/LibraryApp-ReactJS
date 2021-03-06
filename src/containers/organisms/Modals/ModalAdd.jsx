import React, { Component } from "react";
import axios from "axios";

/* REDUX */
import { connect } from "react-redux";
import { getBooks, addBooks } from "../../../redux/actions/book";

import swal from "sweetalert";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Input,
  Form,
  FormGroup,
  Label,
} from "reactstrap";

import {
  headerStyle,
  bodyStyle,
  footerStyle,
  buttonStyle,
} from "../../../styles/organism/ModalEdit.module.css";

class ModalAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title: "",
      image: "",
      description: "",
      genre: "",
      author: "",
      status: "Available",
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  handleAddBooks = (event) => {
    event.preventDefault();
    // const token = localStorage.getItem("token");
    const token = this.props.auth.data.token;
    // const id = this.props.id;

    let formData = new FormData();
    formData.append("title", this.state.title);
    formData.append("image", this.state.image[0]);
    formData.append("description", this.state.description);
    formData.append("genre_id", this.state.genre);
    formData.append("author_id", this.state.author);
    formData.append("status", this.state.status);

    this.props
      .addBooks(token, formData)
      .then((response) => {
        console.log(response);
        this.props.getBooks(token);
        swal({
          icon: "success",
          title: `"${response.value.data.data.title}" is successfully added!`,
          showConfirmaButton: false,
          timer: 3000,
        });
      })
      .then(() => {
        // setTimeout(() => {
        //   window.location.reload();
        // }, 3000);
      })
      .catch((error) => {
        console.log(error.response);
        const errorMsg = error.response.data.data;
        swal({
          icon: "error",
          title: `${errorMsg}`,
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
          className="modal-lg"
        >
          <ModalHeader
            toggle={this.toggle}
            charCode="x"
            className={headerStyle}
          >
            <p>Add Book</p>
          </ModalHeader>
          <Form onSubmit={this.handleAddBooks}>
            <ModalBody className={bodyStyle}>
              <Row>
                <Col md="3" className="mt-2">
                  <Label>Title</Label>
                </Col>
                <Col md="9">
                  <FormGroup>
                    <Input
                      type="text"
                      value={this.state.title}
                      onChange={(e) => this.setState({ title: e.target.value })}
                      placeholder="Dilan 1990"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3" className="mt-2">
                  <Label>Image</Label>
                </Col>
                <Col md="9">
                  <FormGroup>
                    <Input
                      type="file"
                      onChange={(e) => this.setState({ image: e.target.files })}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3" className="mt-2">
                  <Label>Description</Label>
                </Col>
                <Col md="9">
                  <FormGroup>
                    <Input
                      type="textarea"
                      value={this.state.description}
                      onChange={(e) =>
                        this.setState({ description: e.target.value })
                      }
                      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac diam eget est rutrum ultrices. Donec laoreet enim a massa dapibus, cursus egestas dui pulvinar."
                      style={{ height: "200px" }}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3" className="mt-2">
                  <Label>Author</Label>
                </Col>
                <Col md="9">
                  <FormGroup>
                    <Input
                      type="select"
                      name="author"
                      id="author"
                      onChange={(e) =>
                        this.setState({ author: e.target.value })
                      }
                    >
                      <option value="">-- Select Author --</option>
                      {this.props.author.map((author) => {
                        return (
                          <option
                            key={author.author_id}
                            value={author.author_id}
                          >
                            {author.author_name}
                          </option>
                        );
                      })}
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3" className="mt-2">
                  <Label>Genre</Label>
                </Col>
                <Col md="9">
                  <FormGroup>
                    <Input
                      type="select"
                      name="genre"
                      id="genre"
                      onChange={(e) => this.setState({ genre: e.target.value })}
                    >
                      <option value="">-- Select Genre --</option>
                      {this.props.genre.map((genre) => {
                        return (
                          <option key={genre.genre_id} value={genre.genre_id}>
                            {genre.genre_name}
                          </option>
                        );
                      })}
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              {/* <Row>
                <Col md="3" className="mt-2">
                  <Label>Status</Label>
                </Col>
                <Col md="9">
                  <FormGroup>
                    <Input
                      type="select"
                      name="status"
                      id="status"
                      onChange={(e) =>
                        this.setState({ status: e.target.value })
                      }
                    >
                      {this.props.status.map((status) => {
                        return (
                          <option key={status.id} value={status.name}>
                            {status.name}
                          </option>
                        );
                      })}
                    </Input>
                  </FormGroup>
                </Col>
              </Row> */}
            </ModalBody>
            <ModalFooter className={footerStyle}>
              <Button
                className={buttonStyle}
                type="submit"
                color="warning"
                onClick={this.toggle}
              >
                Save
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
}

// export default ModalAdd;
const mapStateToProps = (state) => ({
  auth: state.auth,
  book: state.book,
});

const mapDispatchToProps = { getBooks, addBooks };

export default connect(mapStateToProps, mapDispatchToProps)(ModalAdd);
