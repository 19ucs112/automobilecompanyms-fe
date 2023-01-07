import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CustomerService from "../services/CustomerService";
export default function UpdateCity() {
  const [newcity, setcity] = useState();
  const location = useLocation();
  const history = useNavigate();
  const { id } = useParams();
  function handlesubmit() {
    let customer = {
      firstName: location.state.firstName,
      lastName: location.state.lastName,
      emailId: location.state.emailId,
      mobile: location.state.mobile,
      gender: location.state.gender,
      city: newcity,
      password: location.state.password,
    };
    CustomerService.updateCity(id, customer).then((res) => {
      alert("city updated successfully");
    });
    history("/home/" + id);
  }

  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col">
            <label htmlFor="city">Enter the name of the new city:</label>
          </div>
          <div className="col">
            <input
              type="text"
              placeholder="enter new city"
              onChange={(e) => setcity(e.target.value)}
            ></input>
          </div>
          <div className="col">
            <button className="btn btn-primary" onClick={handlesubmit}>
              submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
