
// import { TabContent, TabPane, Nav, NavItem, NavLink, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
// import classnames from 'classnames';
// import AppNavbar from '../components/AppNavbar';
// import Card from "../components/Cards/Cards"


import React, {useEffect, Fragment } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, getUserLikes } from '../actions/Action'

const Dashboard =({getCurrentProfile, getUserLikes,
  isAuthenticated,
  profile}) => {
  useEffect(() => {
  getCurrentProfile();
  getUserLikes();
  }, [getCurrentProfile, getUserLikes] );
  return (
    <Fragment>
    <div>Dashboard</div>
  </Fragment>
  );


}


// eslint-disable-next-line default-case
 Dashboard.propTypes = {
   getCurrentProfile: propTypes.func.isRequired,
   getUserLikes: propTypes.func.isRequired,
   isAuthenticated: propTypes.object.isRequired,
   profile: propTypes.object.isRequired
 }

 const mapStateToProps = state => ({
   isAuthenticated: state.auth,
   profile: state.profile
 });

 export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);

