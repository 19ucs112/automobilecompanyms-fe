import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { authentication } from "./firebaseApp";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import CustomerService from "../services/CustomerService";

export default function UpdateMobile() {
  const location = useLocation();
  const { id } = useParams();
  const [enterredpass, setEnterredpass] = useState(false);
  const [show, setshow] = useState(false);
  const [showOtp, setshowOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [enterredmobile, setenterredmobile] = useState();
  const history = useNavigate();
  function handleSubmit() {
    if (enterredpass === location.state.password) {
      setshow(true);
    } else {
      alert("incorrect password enterred");
    }
  }
  function validateOtp() {
    let confirmationresult = window.confirmationresult;
    confirmationresult
      .confirm(otp)
      .then((result) => {
        // eslint-disable-next-line
        const user = result.user;
      })
      .catch((error) => {
        console.log(error);
        alert("invalid otp");
      });
    let customer = {
      firstName: location.state.firstName,
      lastName: location.state.lastName,
      emailId: location.state.emailId,
      mobile: enterredmobile,
      gender: location.state.gender,
      city: location.state.city,
      password: location.state.password,
    };
    CustomerService.updateMobile(id, customer).then((res) => {
      alert("Mobile number added successfully");
    });
    history("/home/" + location.state.id);
  }

  function genrateRecaptcha() {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      authentication
    );
  }

  function requestOtp() {
    setshowOtp(true);
    genrateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    let phoneNmber = "+91" + enterredmobile;
    alert(phoneNmber);
    signInWithPhoneNumber(authentication, phoneNmber, appVerifier)
      .then((confirmationresult) => {
        window.confirmationresult = confirmationresult;
      })
      .catch((error) => {
        console.log(error);
        alert("invalid mobile number");
      });
  }
  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col">
            <label htmlFor="password">Enter the password for {id}:</label>
          </div>
          <div className="col">
            <input
              type="password"
              placeholder="enter your password"
              onChange={(e) => setEnterredpass(e.target.value)}
            ></input>
          </div>
          <div className="col">
            <button className="btn btn-primary" onClick={handleSubmit}>
              submit
            </button>
          </div>
        </div>
      </div>
      <div
        className="container mt-2"
        style={{ visibility: show ? "visible" : "hidden" }}
      >
        <div className="row">
          <div className="col">
            <label htmlFor="mobile">Enter new mobile number:</label>
          </div>
          <div className="col">
            <input
              type="number"
              placeholder="Enter your new mobile number"
              onChange={(e) => setenterredmobile(e.target.value)}
            ></input>
          </div>
          <div className="col">
            <button className="btn btn-success" onClick={requestOtp}>
              requestOtp
            </button>
          </div>
        </div>
      </div>
      <div
        className="container mt-3"
        style={{ visibility: showOtp ? "visible" : "hidden" }}
      >
        <div className="row">
          <div className="col">
            <label htmlFor="otp">Enter your otp:</label>
          </div>
          <div className="col">
            <input
              placeholder="enter your otp"
              onChange={(e) => setOtp(e.target.value)}
            ></input>
          </div>
          <div className="col">
            <button className="btn btn-primary" onClick={validateOtp}>
              submit
            </button>
          </div>
        </div>
      </div>
      <div id="recaptcha-container"></div>
    </>
  );
}
