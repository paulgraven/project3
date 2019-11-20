import React, { useState } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { connect } from "react-redux";

const DropDown = props => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Choose Continent</DropdownToggle>
      <DropdownMenu>
        <DropdownItem id="africa">Africa</DropdownItem>
        <DropdownItem id="asia">Asia</DropdownItem>
        <DropdownItem id="australia">Australia</DropdownItem>
        <DropdownItem id="europe">Europe</DropdownItem>
        <DropdownItem id="northAmerica">North America</DropdownItem>
        <DropdownItem id="southAmerica">South America</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default DropDown;
