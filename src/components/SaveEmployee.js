import React, { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SaveEmployee(props) {
  const history = useNavigate();
  const [Data, setData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
    mobile: "",
    city: "",
    salary: "",
    gender: "",
  });
  function submit(e) {
    if (Data.gender === "none" || Data.gender === "") {
      alert("please select a valid gender");
    } else {
      let path = "/employees";
      let employee = {
        id: Data.id,
        firstName: Data.firstName,
        lastName: Data.lastName,
        emailId: Data.emailId,
        mobile: Data.mobile,
        city: Data.city,
        salary: Data.salary,
        gender: Data.gender,
      };
      EmployeeService.createEmployee(employee).then((res) => {
        alert("saved successfully");
      });
      history(path);
    }
  }
  function handle(e) {
    const newData = { ...Data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  return (
    <>
      <div>
        <div>
          <div className="container">
            <div className="row">
              <div className="card col-md-6 offset-md-3 offset-md-3"></div>
              <h3 className="text-center">{props.title}</h3>
              <div className="card-body">
                <form onSubmit={(e) => submit(e)}>
                  <div className="form-group">
                    <label>First Name:</label>
                    <input
                      onChange={(e) => handle(e)}
                      placeholder="First Name"
                      id="firstName"
                      name="firstName"
                      className="form-control"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>Last Name:</label>
                    <input
                      onChange={(e) => handle(e)}
                      placeholder="Last Name"
                      id="lastName"
                      name="lastName"
                      className="form-control"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>email:</label>
                    <input
                      onChange={(e) => handle(e)}
                      placeholder="email"
                      id="emailId"
                      name="emailId"
                      className="form-control"
                    ></input>
                  </div>
                  <label htmlFor="gender"> Select you gender</label>
                  <div className="dropdown ">
                    <select
                      name="gender"
                      id="gender"
                      onChange={(e) => handle(e)}
                    >
                      <option value="none" selected>
                        Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>mobile:</label>
                    <input
                      onChange={(e) => handle(e)}
                      placeholder="mobile"
                      id="mobile"
                      name="mobile"
                      className="form-control"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>city:</label>
                    <input
                      onChange={(e) => handle(e)}
                      placeholder="city"
                      id="city"
                      name="city"
                      className="form-control"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>salary:</label>
                    <input
                      onChange={(e) => handle(e)}
                      placeholder="salary"
                      id="salary"
                      name="salary"
                      className="form-control"
                    ></input>
                  </div>
                  <button className="btn btn-success my-1 mx-2" type="submit">
                    submit
                  </button>
                  <Link to="/employees" className="btn btn-danger my-1 mx-2">
                    cancel
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
