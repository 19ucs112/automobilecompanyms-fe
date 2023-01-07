import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
export default function UpdateEmployee(props) {
  var { Id } = useParams();
  const history = useNavigate();
  const [Data, setData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    mobile: "",
    city: "",
    salary: "",
  });

  const [flag, setflag] = useState(0);
  // eslint-disable-next-line
  useEffect(() => {
    if (flag === 0) {
      getusers();
      setflag(1);
    }
  });
  function getusers() {
    EmployeeService.getEmployeeById(Id).then((res) => {
      setData(res.data);
    });
  }
  function handle(e) {
    const newData = { ...Data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  function submit() {
    let element = {
      firstName: Data.firstName,
      lastName: Data.lastName,
      emailId: Data.emailId,
      mobile: Data.mobile,
      city: Data.city,
      salary: Data.salary,
    };
    EmployeeService.updateEmployee(element, Id).then((res) => {
      console.log(res.data);
      alert("updated successfully");
    });
    history("/employees");
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
                      defaultValue={Data.firstName}
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
                      defaultValue={Data.lastName}
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
                      defaultValue={Data.emailId}
                      onChange={(e) => handle(e)}
                      placeholder="email"
                      id="emailId"
                      name="emailId"
                      className="form-control"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>mobile:</label>
                    <input
                      defaultValue={Data.mobile}
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
                      defaultValue={Data.city}
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
                      defaultValue={Data.salary}
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
