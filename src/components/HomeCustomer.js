import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomerService from "../services/CustomerService";
import RegisteredCarService from "../services/RegisteredCarService";
function HomeCustomer() {
  const history = useNavigate();
  const [Data, setData] = useState("");
  const [element, setelement] = useState([]);
  const [show, setshow] = useState(true);
  const [details, Setdetails] = useState([]);
  var { id } = useParams(true);
  // eslint-disable-next-line
  useEffect(() => {
    CustomerService.getfirstName(id).then((res) => {
      setData(res.data);
    });
    RegisteredCarService.getallDetails(id).then((res) => {
      Setdetails(res.data);
    });
    RegisteredCarService.getCarDetails(id).then((res) => {
      setelement(res.data);
    });
    if (element.length === 0) {
      setshow(false);
    } else {
      setshow(true);
    }
  });
  function handleClick(e) {
    alert(
      "Please enter relevant information or else your registration will be deleted"
    );
    history("/register_car/" + id);
  }
  function handlemanage(e) {
    history("/manage_car/" + id, {
      state: details,
    });
  }
  function handleSell(e) {
    history("/buy_or_sell_car/" + id, {
      state: details,
    });
  }
  return (
    <>
      <div className="container mt-1">
        <div className="row align-items-start">
          <div className="col">
            <div
              className="card mb-4 mt-2"
              style={{
                height: 500,
                width: 300,
                display: !show ? "block" : "none",
              }}
            >
              <img
                style={{ width: 290, height: 250 }}
                src="https://media.istockphoto.com/vectors/harmful-symbol-warning-sign-vector-illustration-eps10-vector-id1026915588?k=20&m=1026915588&s=612x612&w=0&h=uURV7MMLPXyCcCOKhg7RlIfbbnUby3bn_pBrqlcaz4c="
                className="card-img-top"
                alt="..."
              />
              <div className="card-body d-flex flex-column">
                <strong className="card-title">
                  Oops we couldn't find any registered vehicles
                </strong>
                <br></br>
                <p className="card-text">
                  Register your vehicle with us and avail exciting benefits and
                  offers
                </p>
                <a
                  href=""
                  className="btn btn-outline-primary mt-auto"
                  onClick={(e) => handleClick(e)}
                >
                  Register
                </a>
              </div>
            </div>
            <div
              className="card  mb-4 mt-2"
              style={{
                height: 500,
                width: 300,
                display: show ? "block" : "none",
              }}
            >
              <img
                style={{ width: 295, height: 250 }}
                src="data:image/png;base64,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"
                alt="..."
              />

              <div className="card-body d-flex flex-column">
                <strong className="card-title">
                  Manage your registered vehicles
                </strong>
                <div className="card-text">
                  <p className="row">
                    <strong className="col">company</strong>
                    <strong className="col">carName</strong>
                  </p>
                  {element.map((value) => (
                    <p className="row">
                      <strong className="col">{value.company}</strong>
                      <strong className="col">{value.carName}</strong>
                    </p>
                  ))}
                </div>
                <div className="row">
                  <div className="col">
                    <a
                      href=""
                      className="btn btn-outline-primary mt-auto"
                      onClick={(e) => handlemanage(e)}
                    >
                      Manage
                    </a>
                  </div>
                  <div className="col">
                    <a
                      href=""
                      className="btn btn-outline-primary mt-auto"
                      onClick={(e) => handleClick(e)}
                    >
                      Add vehicle
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mt-2 mb-4" style={{ height: 500, width: 300 }}>
              <img
                style={{ height: 250, width: 300 }}
                src="data:image/jpeg;base64,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"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body d-flex flex-column">
                <strong className="card-title">Buy and Sell used cars</strong>
                <br></br>
                <p className="card-text">
                  Sell your old car at a great value<br></br> Buy used cars with
                  amazing offers including free fastag installation and much
                  more on selected cars....
                </p>
                <button
                  className="btn btn-outline-primary mt-auto"
                  onClick={(e) => handleSell(e)}
                >
                  Click here
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mt-2 mb-4" style={{ height: 500, width: 300 }}>
              <img
                style={{ height: 250, width: 300 }}
                src="data:image/jpeg;base64,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"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body d-flex flex-column">
                <strong className="card-title">Service old or new car</strong>
                <br></br>
                <p className="card-text">
                  Service your old or new car and get amazing complementary
                  services <br></br>Get free wheel allignment for the first
                  service of your car and much more{" "}
                </p>
                <a href="/" className="btn btn-outline-primary mt-auto">
                  click here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeCustomer;
