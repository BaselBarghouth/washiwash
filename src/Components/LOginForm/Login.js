import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBModalFooter
} from "mdbreact";
import "./login.css";
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  getToken = async (email, password) => {
    let body = new FormData();
    body.append("email", email);
    body.append("password", password);
    const batatahara = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      body: body
    });
    const makdous = await batatahara.json();
    localStorage.setItem("token", makdous.token);
    console.log("======>", localStorage.getItem("token"));
  };
  // getToken = async (email, password) => {
  //   let body = new FormData();
  //   body.append("email", email);
  //   body.append("password", password);
  //   const req = await fetch("http://localhost:8000/api/login", {
  //     method: "POST",
  //     body
  //   });
  //   const res = await req.json();
  //   console.log(res);
  //   localStorage.setItem("token", res.token);
  // };
  onSubmit = () => {
    let { email, password } = this.state;
    this.getToken(email, password);
    this.setState({
      email: "",
      password: ""
    });
    this.props.history.push("/login/admin");
  };
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody className="mx-4">
                <div className="text-center">
                  <h3 className="dark-grey-text mb-5">
                    <strong>Sign in</strong>
                  </h3>
                </div>
                <MDBInput
                  label="Your email"
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
                  label="Your password"
                  group
                  type="password"
                  validate
                  containerClass="mb-0"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
                <div className="text-center mb-3">
                  <MDBBtn
                    type="button"
                    gradient="blue"
                    rounded
                    className="btn-block z-depth-1a"
                    onClick={this.onSubmit}
                  >
                    Sign in
                  </MDBBtn>
                </div>
              </MDBCardBody>
              <MDBModalFooter className="mx-5 pt-3 mb-1">
                <p className="font-small grey-text d-flex justify-content-end">
                  Not a member?
                  <a href="#!" className="blue-text ml-1">
                    Sign Up
                  </a>
                </p>
              </MDBModalFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
export default LoginForm;
