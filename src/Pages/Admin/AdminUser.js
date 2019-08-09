import React, { Component } from "react";
import AddForm from "../../Components/AddUser/AddUser.js";
class AdminUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <AddForm {...this.props} />
      </div>
    );
  }
}

export default AdminUser;
