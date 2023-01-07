import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

export default function EmployeeListComponent() {
  const [employee, setemployee] = useState([]);
  const history = useNavigate();
  useEffect(() => {
    EmployeeService.getEmployees().then((res) => {
      setemployee(res.data);
    });
  });
  function add_Employees() {
    history("/add_Employees");
  }
  function update_Employee(id) {
    let update = "update_Employees";
    let path = "/" + update + "/" + id;
    history(path);
  }
  function delete_Employee(id) {
    EmployeeService.getEmployeeById(id).then((res) => {
      EmployeeService.deleteEmployee(id);
      alert("employee deleted successfully");
    });
    history("/employees");
  }
  return (
    <>
      <div>
        <h1 className="text-center">EmployeesList</h1>
        <button className="btn btn-primary" onClick={add_Employees}>
          Add Employees
        </button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Employee ID</th>
              <th scope="col">firstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Gender</th>
              <th scope="col">Email id</th>
              <th scope="col">Mobile</th>
              <th scope="col">city</th>
              <th scope="col">salary</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((value) => (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.firstName}</td>
                <td>{value.lastName}</td>
                <td>{value.gender}</td>
                <td>{value.emailId}</td>
                <td>{value.mobile}</td>
                <td>{value.city}</td>
                <td>{value.salary}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => update_Employee(value.id)}
                  >
                    update
                  </button>
                  <button
                    className="btn btn-danger mx-1"
                    onClick={() => delete_Employee(value.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
