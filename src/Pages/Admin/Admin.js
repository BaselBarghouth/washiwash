import React, { Component } from "react";
import { crudUser } from "../../Components/Controller/contollerUser.js";
import AdminUser from "./AdminUser.js";
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.crudUser = new crudUser();
  }
  async componentDidMount() {
    let users = await this.crudUser.getUsers();

    this.setState({ users });
  }
  createUser = async params => {
    await this.crudUser.createUsers();
  };
  createUser = async ({
    first_name,
    last_name,
    middle_name,
    email,
    password,
    roles
  }) => {
    const user = await this.crudUser.createUsers({
      first_name,
      last_name,
      middle_name,
      email,
      password,
      roles
    });
    let users = [...this.state.users, user];
    this.setState({ users });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <AdminUser createUser={this.createUser} {...this.props} />
        <button onClick={this.createUser}>Add</button>
        {/* {this.state.users.map(user => (
          <div>{user.first_name}</div>
        ))} */}
      </div>
    );
  }
}

export default Admin;
