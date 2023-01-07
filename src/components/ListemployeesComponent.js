import React, { Component } from "react";
import { Link } from "react-router-dom";

import EmployeeService from "../services/EmployeeService";
export default class ListemployeesComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
  }
  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-center">EmployeesList</h1>
        <Link to="/add_Employees" className="btn btn-primary">
          Add Employees
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">firstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Email id</th>
              <th scope="col">Mobile</th>
              <th scope="col">city</th>
              <th scope="col">salary</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td>{employee.mobile}</td>
                <td>{employee.city}</td>
                <td>{employee.salary}</td>

                <td>
                  <Link to="/update_Employees" className="btn btn-info">
                    update
                  </Link>
                  <Link to="/update_Employees" className="btn btn-danger mx-1">
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
