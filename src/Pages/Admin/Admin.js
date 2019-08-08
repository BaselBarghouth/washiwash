import React, { Component } from "react";
import { crudUser } from "../../Components/Controller/contollerUser.js";
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.crudUser = new crudUser();
  }
  async componentDidMount() {
    await this.crudUser.getUsers();
  }
  render() {
    return <div>Admin</div>;
  }
}

export default Admin;
