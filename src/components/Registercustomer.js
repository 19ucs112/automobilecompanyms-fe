import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
function Register_customer() {
  const [Data, setData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
    mobile: "",
    gender: "",
    city: "",
    password: "",
    c_password: "",
  });
  const history = useNavigate();
  function handleSubmit() {
    if (Data.gender === "none" || Data.gender === "") {
      alert("please choose a valid gender");
    } else if (Data.c_password !== Data.password) {
      alert("Passwords did not match... try again");
    } else {
      let mobile = "mobileauth";
      history("/" + mobile, {
        state: Data,
      });
    }
  }
  function handleClick(e) {
    const newData = { ...Data };
    newData[e.target.id] = e.target.value;
    setData(newData);
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
        <div className="col align-self-start">
          <br></br>
        </div>
        <div className="card container" style={{ width: 400 }}>
          <div
            className="card-header text-light my-3"
            style={{ backgroundColor: "gray" }}
          >
            <strong> Register</strong>
          </div>
          <div
            className="card-body "
            style={{ alignItems: "center", backgroundColor: "cyan" }}
          >
            <form className="container my-1" onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-outline mb-4 col">
                  <label className="form-label" htmlFor="form2Example1">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    onChange={(e) => handleClick(e)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-outline mb-4 col">
                  <label className="form-label" htmlFor="form2Example2">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    onChange={(e) => handleClick(e)}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-outline mb-4 col">
                  <label className="form-label" htmlFor="form2Example2">
                    Email
                  </label>
                  <input
                    id="emailId"
                    onChange={(e) => handleClick(e)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-outline mb-4 col">
                  <label className="form-label" htmlFor="form2Example2">
                    Mobile
                  </label>
                  <input
                    type="text"
                    id="mobile"
                    onChange={(e) => handleClick(e)}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="dropdown col">
                  <label htmlFor="gender"> Select you gender</label>
                  <select
                    name="gender"
                    id="gender"
                    onChange={(e) => handleClick(e)}
                  >
                    <option value="none" selected>
                      Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">other</option>
                  </select>
                </div>
                <div className="form-outline mb-4 col">
                  <label className="form-label" htmlFor="form2Example2">
                    city
                  </label>
                  <input
                    id="city"
                    onChange={(e) => handleClick(e)}
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="form-outline mb-4 col">
                  <label className="form-label" htmlFor="form2Example2">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    onChange={(e) => handleClick(e)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-outline mb-4 col">
                  <label className="form-label" htmlFor="form2Example2">
                    Confirm Password
                  </label>
                  <input
                    id="c_password"
                    onChange={(e) => handleClick(e)}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-block mb-4">
                submit
              </button>
              <Link to="/" className="btn btn-info btn-block mb-4 mx-2">
                cancel
              </Link>
            </form>
          </div>
          <br></br>
        </div>
      </div>
    </>
  );
}

export default Register_customer;
