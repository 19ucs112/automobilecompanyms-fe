import React, { useState } from "react";
import { authentication } from "./firebaseApp";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import CustomerService from "../services/CustomerService";
function Signinwithmobile() {
  const history = useNavigate();
  const location = useLocation();
  const [otp, setotp] = useState("");
  const [show, setshow] = useState(false);

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
      });
    alert("Mobile number validated successfully");
    let customer = {
      id: location.state.id,
      firstName: location.state.firstName,
      lastName: location.state.lastName,
      emailId: location.state.emailId,
      mobile: location.state.mobile,
      gender: location.state.gender,
      city: location.state.city,
      password: location.state.password,
    };
    CustomerService.saveCustomer(customer).then((res) => {
      alert("Registered Successfully, Use id=" + res.data + " for login");
    });
    history("/login");
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
    setshow(true);
    genrateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    let phoneNmber = "+91" + location.state.mobile;
    alert(phoneNmber);
    signInWithPhoneNumber(authentication, phoneNmber, appVerifier)
      .then((confirmationresult) => {
        window.confirmationresult = confirmationresult;
      })
      .catch((error) => {
        console.log(error);
        alert("invalid  mobile number");
      });
  }
  return (
    <>
      <div className="container">
        <strong>Verify your mobile number</strong>
      </div>
      <div className="container mt-2 row">
        <div className="col">
          <label>Request otp for mobile +91 {location.state.mobile}</label>
        </div>
        <div className="col">
          <button className="btn btn-primary mx-2" onClick={requestOtp}>
            requestOtp
          </button>
        </div>
      </div>
      <div
        className="container mt-2 row"
        style={{ visibility: show ? "visible" : "hidden" }}
      >
        <div className="col">
          <label>otp:</label>
          <input
            type="number"
            placeholder="enter otp recieved"
            onChange={(e) => setotp(e.target.value)}
          ></input>
        </div>
        <div className="col">
          <button className="btn btn-primary mx-2" onClick={validateOtp}>
            validate
          </button>
        </div>
      </div>
      <div id="recaptcha-container"></div>
    </>
  );
}

export default Signinwithmobile;
