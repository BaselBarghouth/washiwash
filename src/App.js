import React, { Component } from "react";
import Login from "./Components/LoginForm/Login.js";
import { Route, withRouter } from "react-router-dom";
import LandingPage from "./Pages/landing-page/LandingPage.js";
import Admin from "./Pages/Admin/Admin.js";
import AddForm from "./Pages/Admin/AdminUser.js";
import AdminUser from "./Pages/Admin/AdminUser.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={props => <LandingPage {...props} />} />
        <Route
          exact
          path="/login/admin/adminuser"
          render={props => <AdminUser {...props} />}
        />
        <Route
          exact
          path="/login/admin/adminuser/addform"
          render={props => <AddForm {...props} />}
        />

        <Route exact path="/login" render={props => <Login {...props} />} />
        <Route
          exact
          path="/login/admin"
          render={props => <Admin {...props} />}
        />
      </div>
    );
  }
}

export default withRouter(App);
