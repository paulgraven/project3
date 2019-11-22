import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";
import "bootstrap/dist/css/bootstrap.min.css";

//pages:
import Routes from "./components/routing/Routes";

//components:
import AppNavbar from "./components/AppNavbar";
import { Container } from "reactstrap";
import PostModal from "./components/PostModal";
import Dashboard from "./pages/Dashboard";
import AllPosts from "./pages/AllPosts";
import Cards from "./components/Cards/Cards";

// import './App.css';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Container>
            <AppNavbar />
            <PostModal />
            {/* <GetPosts /> */}

            <Switch>
              <Route component={Routes} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/allPosts" component={AllPosts} />
            </Switch>
          </Container>
        </Router>
      </Provider>
    );
  }
}

export default App;
