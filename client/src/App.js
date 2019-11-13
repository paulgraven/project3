import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
// import PostModal from './components/PostModal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
//import { BrowserRouter as Router, Route } from "react-router-dom";


import Home from "./pages/Home"
// import './App.css';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
    
      <Provider store={store}>
        <div className='App'>
          <AppNavbar />
          <Container>
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;