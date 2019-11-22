import React, { Component } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import propTypes from "prop-types";
import { connect } from "react-redux";

class DropDown extends Component {
  state = {
    modal: false,
    dropdownOpen: false,
    setOpen: false,
    dropDownValue: "Choose a Continent",
    africa: "",
    asia: "",
    australia: "",
    europe: "",
    northAmerica: "",
    southAmerica: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onClick = e => {
    console.log(e.currentTarget.textContent);
    this.setState({ dropDownValue: e.currentTarget.textContent });
    this.setState({ [e.target.name]: e.currentTarget.textContent });
  };

  // this.toggle
  render() {
    return (
      <ButtonDropdown isOpen={this.state.modal} toggle={this.toggle}>
        <DropdownToggle id="continent" caret>
          {this.state.dropDownValue}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem id="africa" onClick={this.onClick}>
            Africa
          </DropdownItem>
          <DropdownItem id="asia" onClick={this.onClick}>
            Asia
          </DropdownItem>
          <DropdownItem id="australia" onClick={this.onClick}>
            Australia
          </DropdownItem>
          <DropdownItem id="europe" onClick={this.onClick}>
            Europe
          </DropdownItem>
          <DropdownItem id="northAmerica" onClick={this.onClick}>
            North America
          </DropdownItem>
          <DropdownItem id="southAmerica" onClick={this.onClick}>
            South America
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}
ButtonDropdown.propTypes = {
  disabled: propTypes.bool,
  direction: propTypes.oneOf(["up", "down", "left", "right"]),
  group: propTypes.bool,
  isOpen: propTypes.bool,
  tag: propTypes.string,
  toggle: propTypes.func
};

DropdownToggle.propTypes = {
  caret: propTypes.bool,
  color: propTypes.string,
  disabled: propTypes.bool,
  onClick: propTypes.func,
  "data-toggle": propTypes.string,
  "aria-haspopup": propTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { DropDown })(DropDown);
