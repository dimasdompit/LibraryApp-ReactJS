import React, { Component } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
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

class ModalEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title: this.props.title,
      image: this.props.image,
      description: this.props.description,
      genre: this.props.genre,
      author: this.props.author,
      status: this.props.status,
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  handleUpdateBooks = (event) => {
    const token = localStorage.getItem("token");
    event.preventDefault();
    const id = this.props.id;

    let formData = new FormData();
    formData.append("title", this.state.title);
    formData.append("image", this.state.image[0]);
    formData.append("description", this.state.description);
    formData.append("genre_id", this.state.genre);
    formData.append("author_id", this.state.author);
    formData.append("status", this.state.status);

    axios({
      method: "PUT",
      url: "http://localhost:3000/books/" + id,
      data: formData,
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response);
        swal({
          icon: "success",
          title: `Book with ID = ${id} Successfully Edited`,
          showConfirmaButton: false,
          timer: 3000,
        });
      })
      .then(() => {
        setTimeout(() => {
          window.location.reload();
        }, 3000);
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
          <ModalHeader
            toggle={this.toggle}
            charCode="x"
            className={headerStyle}
          >
            <p>Edit Data</p>
          </ModalHeader>
          <Form onSubmit={this.handleUpdateBooks}>
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
                      id="author_id"
                      onChange={(e) =>
                        this.setState({ author: e.target.value })
                      }
                    >
                      {this.props.authors.map((author) => {
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
                      {this.props.genres.map((genre) => {
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

export default ModalEdit;
