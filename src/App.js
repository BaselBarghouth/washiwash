import React, { Component } from "react";
import Login from "./Components/LOginForm/Login.js";
import { Route, withRouter } from "react-router-dom";
import Admin from "./Pages/Admin/Admin.js";
class App extends Component {
  render() {
    return (
      <div className="App">
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
