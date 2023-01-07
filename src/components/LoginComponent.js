import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerService from "../services/CustomerService";

export default function LoginComponent() {
  const [Data, setData] = useState({
    id: "",
    password: "",
  });
  const history = useNavigate();
  function handleClick() {
    CustomerService.authenticateCustomer(Data.id, Data.password).then((res) => {
      if (res.data === true) {
        alert("Login Successful");
        history("/home/" + Data.id);
      } else {
        alert("Incorrect customerId or password");
      }
    });
  }
  function handleEvent(e) {
    const newData = { ...Data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  function handleforgotpass() {
    if (Data.id === "") {
      alert("please enter your customer id and click on forgot password");
    } else {
      history("/change_password/" + Data.id);
    }
  }

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/image4.jpg"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          flex: 1,
          height: "100vh",
        }}
      >
        <div class="col align-self-start">
          <br></br>
          <br></br>
        </div>
        <div className="card container" style={{ width: 400 }}>
          <div
            className="card-header text-light my-3"
            style={{ backgroundColor: "gray" }}
          >
            <strong>Login</strong>
          </div>
          <div
            className="card-body "
            style={{ alignItems: "center", backgroundColor: "cyan" }}
          >
            <form className="container my-1">
              <div className="form-outline mb-4">
                <label
                  className="form-label text-success"
                  htmlFor="form2Example1"
                >
                  <strong>customer Id:</strong>
                </label>
                <input
                  type="text"
                  id="id"
                  onChange={(e) => handleEvent(e)}
                  className="form-control"
                />
              </div>
              <div className="form-outline mb-4">
                <label
                  className="form-label text-success"
                  htmlFor="form2Example2"
                >
                  <strong>Password:</strong>
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => handleEvent(e)}
                  className="form-control"
                />
              </div>

              <button
                type="button"
                className="btn btn-primary btn-block mb-4"
                onClick={handleClick}
              >
                Sign in
              </button>
              <div className="row mb-4">
                <div className="col">
                  <a href="" onClick={handleforgotpass}>
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="text-center">
                <p>
                  Not a member? <a href="/register_customer">Register</a>
                </p>
              </div>
            </form>
          </div>
          <br></br>
        </div>
      </div>
    </>
  );
}
