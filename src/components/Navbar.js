import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CustomerService from "../services/CustomerService";
import RemoveCookie from "./removecookie";
export default function Navbar() {
  const history = useNavigate();
  const [Data, setData] = useState(true);
  var { id, update } = useParams();
  // eslint-disable-next-line
  useEffect(() => {
    if (id !== undefined && update === undefined && id.length <= 9) {
      CustomerService.getCustomerbyId(id).then((res) => {
        if (res.data === true) {
          setData(false);
        }
      });
    } else if (id !== undefined && update === undefined) {
      setData(false);
    } else {
      setData(true);
    }
  });
  function handlelogout() {
    RemoveCookie("usrin");
    history("/login");
  }
  function handleClick() {
    history("/customerSettings/" + id);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <img
            src="data:image/png;base64,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"
            alt=""
            width="50"
            height="50"
          ></img>
          <a className="navbar-brand" href="/"></a>
          <a className="navbar-brand" href="/">
            <strong>Automobile Company</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  href=""
                  className="nav-link active me-8"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <i className="fa fa-thin fa-info fa-fw"></i>about us
                </a>
              </li>
              <li
                className="nav-item"
                style={{ display: Data ? "block" : "none" }}
              >
                <a
                  href="/login"
                  className="nav-link active me-8"
                  aria-current="page"
                >
                  <i className="fa fa-sign-in fa-fw"></i> login
                </a>
              </li>
              <li
                className="nav-item"
                style={{ display: !Data ? "block" : "none" }}
              >
                <li className="dropdown">
                  <a
                    href=""
                    className="nav-link active me-8"
                    data-bs-toggle="dropdown"
                    data-bs-target="#dropdown"
                  >
                    <i className="fa fa-user fa-fw"></i>
                  </a>

                  <ul className="dropdown-menu dropdown-use">
                    <li>
                      <a href="/">
                        <i className="fa fa-user fa-fw"></i> Userprofile
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={handleClick}>
                        <i className="fa fa-gear fa-fw"></i> Settings
                      </a>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <a href="" onClick={handlelogout}>
                        <i className="fa fa-sign-out fa-fw"></i> Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: "cyan" }}>
              <h5 className="modal-title text-primary" id="staticBackdropLabel">
                About Us
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body ">
              Shaik Dastagiri<br></br>
              Full Stack Java Developer<br></br>
              ReactJs And SpringBoot<br></br>
              Automobile Company Software (CRUD website)
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
