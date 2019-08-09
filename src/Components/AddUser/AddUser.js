import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      middle_name: "",
      email: "",
      password: "",
      roles: []
    };
  }
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onChangeRole = event => {
    let roles = [event.target.value];
    this.setState({ roles }, () => console.log(this.state.roles));
  };
  addUser = () => {
    this.props.createUser(this.state);
  };
  render() {
    return (
      <div>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <form>
                <p className="h5 text-center mb-4">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    label="First Name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    name="first_name"
                    value={this.state.first_name}
                    onChange={this.onChange}
                  />
                  <MDBInput
                    label="Last Name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    name="last_name"
                    value={this.state.last_name}
                    onChange={this.onChange}
                  />
                  <MDBInput
                    label="Middle Name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    name="middle_name"
                    value={this.state.middle_name}
                    onChange={this.onChange}
                  />
                  <MDBInput
                    label="Email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  <MDBInput
                    label="Password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  <MDBDropdown>
                    <MDBDropdownToggle caret color="primary">
                      MDBDropdown
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic onClick={this.onChangeRole}>
                      <MDBDropdownItem name="admin" value="1">
                        Admin
                      </MDBDropdownItem>
                      <MDBDropdownItem name="customers" value="2">
                        Customer
                      </MDBDropdownItem>
                      <MDBDropdownItem name="employee" value="3">
                        Employee
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </div>
                <div className="text-center">
                  <MDBBtn color="primary" onClick={this.addUser}>
                    Register
                  </MDBBtn>{" "}
                  <MDBBtn
                    color="primary"
                    onClick={() => this.props.history.push("/admincustomer")}
                  >
                    Cancel
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default AddForm;
