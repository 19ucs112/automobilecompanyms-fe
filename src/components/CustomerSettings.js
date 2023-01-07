import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomerService from "../services/CustomerService";

function CustomerSettings() {
  const history = useNavigate();
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
  var { id } = useParams();
  useEffect(() => {
    CustomerService.findCustomerById(id).then((res) => {
      setData(res.data);
    });
  });
  function handleCity() {
    history("/update_city/" + id, {
      state: Data,
    });
  }

  function handledelete() {
    CustomerService.delete(id).then((res) => {
      alert("Account deleted successfully... Hoping to see you soon");
    });
    history("/");
  }
  function handlepassword(e) {
    history("/change_password/" + id, {
      state: Data,
    });
  }
  function handlemobile(e) {
    history("/updatemobile/" + id, {
      state: Data,
    });
  }
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/image4.jpg"})`,
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
            <strong>Your details</strong>
          </div>
          <div
            className="card-body "
            style={{ alignItems: "center", backgroundColor: "cyan" }}
          >
            <form className="container my-1">
              <p className="text-primary">Hi {Data.firstName}</p>
              <div className="row">
                <div className="form-outline mb-4 col">
                  <label className="form-label" htmlFor="form2Example2">
                    Mobile
                  </label>
                  <input
                    type="text"
                    id="mobile"
                    defaultValue={Data.mobile}
                    className="form-control"
                    disabled={true}
                  />
                </div>
                <div className="form-outline mb-4 col">
                  <label className="form-label" htmlFor="form2Example2">
                    Update your mobile:
                  </label>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => handlemobile(e)}
                  >
                    Update Mobile
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="form-outline mb-4 col">
                  <label className="form-label" htmlFor="form2Example2">
                    city
                  </label>
                  <input
                    id="city"
                    defaultValue={Data.city}
                    className="form-control"
                    disabled={true}
                  />
                </div>
                <div className="form-outline mb-4 col">
                  <label className="form-label" htmlFor="form2Example2">
                    Update your city:
                  </label>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => handleCity(e)}
                  >
                    Update city
                  </button>
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
                    className="form-control"
                    defaultValue={Data.password}
                    disabled={true}
                  />
                </div>
                <div className="form-outline mb-4 col">
                  <label className="form-label" htmlFor="form2Example2">
                    Change password:
                  </label>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => handlepassword(e)}
                  >
                    change password
                  </button>
                </div>
              </div>
              <div class="form-inline mt-3 mt-lg-0">
                <button
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Delete your account?
                </button>
              </div>
              <div class="modal" tabindex="-1" id="exampleModal">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title text-danger">Delete Account</h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <p>Are you sure want to delete your account?</p>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-success"
                        data-bs-dismiss="modal"
                      >
                        No
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={handledelete}
                      >
                        yes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <br></br>
        </div>
      </div>
    </>
  );
}

export default CustomerSettings;
