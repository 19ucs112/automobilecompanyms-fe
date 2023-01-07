import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "./withRouter";
import EmployeeService from "../services/EmployeeService";

class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      city: "",
      salary: "",
    };
  }
  changefirstNamehandler = (event) => {
    this.setState({ firstName: event.target.value });
  };
  changelastNamehandler = (event) => {
    this.setState({ lastName: event.target.value });
  };
  changeemailhandler = (event) => {
    this.setState({ email: event.target.value });
  };
  changecityhandler = (event) => {
    this.setState({ city: event.target.value });
  };
  changemobilehandler = (event) => {
    this.setState({ mobile: event.target.value });
  };
  changesalaryhandler = (event) => {
    this.setState({ salary: event.target.value });
  };
  saveemployee() {
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      mobile: this.state.email,
      city: this.state.city,
      salary: this.state.salary,
    };
    EmployeeService.createEmployee(employee).then((res) => {
      this.props.navigate("/employees");
    });
  }
  render() {
    return (
      <>
        <div>
          <div className="container">
            <div className="row">
              <div className="card col-md-6 offset-md-3 offset-md-3"></div>
              <h3 className="text-center">Employee Registration</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>First Name:</label>
                    <input
                      placeholder="First Name"
                      name="firstname"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changefirstNamehandler.bind(this)}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>Last Name:</label>
                    <input
                      placeholder="Last Name"
                      name="lastname"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changelastNamehandler.bind(this)}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>email:</label>
                    <input
                      placeholder="email"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeemailhandler.bind(this)}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>mobile:</label>
                    <input
                      placeholder="mobile"
                      name="mobile"
                      className="form-control"
                      value={this.state.mobile}
                      onChange={this.changemobilehandler.bind(this)}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>city:</label>
                    <input
                      placeholder="city"
                      name="city"
                      className="form-control"
                      value={this.state.city}
                      onChange={this.changecityhandler.bind(this)}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>salary:</label>
                    <input
                      placeholder="salary"
                      name="salary"
                      className="form-control"
                      value={this.state.salary}
                      onChange={this.changesalaryhandler.bind(this)}
                    ></input>
                  </div>
                  <button
                    className="btn btn-success my-1 mx-2"
                    onClick={this.saveemployee.bind(this)}
                  >
                    Save
                  </button>
                  <Link to="/employees" className="btn btn-danger my-1 mx-2">
                    cancel
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(CreateEmployeeComponent);
