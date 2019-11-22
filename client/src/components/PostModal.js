import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addPost } from "../actions/postActions";
import PropTypes from "prop-types";
// import DropDown from "../components/DropDown";

class PostModal extends Component {
  state = {
    modal: false,
    // continent: "",
    country: "",
    city: "",
    photo: "",
    description: "",
    user: ""
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    // dropDown: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newPost = {
      // continent: this.state.dropDownValue,
      // continent: this.state.continent,
      // continent: "Africa",
      country: this.state.country,
      city: this.state.city,
      photo: this.state.photo,
      description: this.state.description,
      user: this.props.auth.user
    };

    console.log(newPost); // Add post via addPost action
    this.props.addPost(newPost); // Close modal
    this.toggle();
    window.location.reload();
  };

  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <Button
            color="dark"
            style={{ marginBottom: "2rem" }}
            onClick={this.toggle}
          >
            Add Post
          </Button>
        ) : (
          <h4 className="mb-3 ml-4">Please log in to manage posts</h4>
        )}

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Post a Trip!</ModalHeader>
          <ModalBody>
            <div id="user"></div>

            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                {/* <DropDown /> */}
                <br />
                <br />

                <Label for="country">Country</Label>
                <Input
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Country visited"
                  onChange={this.onChange}
                />
                <br />
                <Label for="city">City</Label>
                <Input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City visited"
                  onChange={this.onChange}
                />
                <br />
                <Label for="photo">Photos</Label>
                <Input
                  type="text"
                  name="photo"
                  id="photo"
                  placeholder="Link to photo(s)"
                  onChange={this.onChange}
                />
                <br />
                <Label for="description">Description of trip</Label>
                <Input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="What was your favorite part??"
                  onChange={this.onChange}
                />
                <br />
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Click here to post your trip
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth,
  // drop: state.dropDownValue,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { addPost })(PostModal);
