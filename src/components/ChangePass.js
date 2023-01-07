import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { authentication } from "./firebaseApp";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import CustomerService from "../services/CustomerService";

function ChangePass() {
  const { id } = useParams();
  const location = useLocation();
  const [show, setshow] = useState(false);
  const [passshow, setpassshow] = useState(false);
  const [otp, setotp] = useState("");
  const [newPass, setnewPass] = useState("");
  const history = useNavigate();
  const [confirmpass, setconfirmpass] = useState("");
  function vaidateOtp() {
    let confirmationresult = window.confirmationresult;
    confirmationresult
      .confirm(otp)
      .then((result) => {
        setpassshow(true);
        // eslint-disable-next-line
        const user = result.user;
      })
      .catch((error) => {
        console.log(error);
        alert("invalid otp");
      });
  }
  function changepassword() {
    if (newPass !== confirmpass) {
      alert("passwords did not match");
    } else {
      let customer = {
        id: location.state.id,
        firstName: location.state.firstName,
        lastName: location.state.lastName,
        emailId: location.state.emailId,
        mobile: location.state.mobile,
        gender: location.state.gender,
        city: location.state.city,
        password: newPass,
      };
      CustomerService.changePassword(id, customer).then((res) => {
        alert("Password changed successfully");
      });
      history("/login");
    }
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
        alert("invalid mobile number");
      });
  }

  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col">
            <label htmlFor="mobile">Validate your mobile:</label>
          </div>
          <div className="col">
            <input
              type="number"
              defaultValue={location.state.mobile}
              disabled={true}
            ></input>
          </div>
          <div className="col">
            <button className="btn btn-primary" onClick={requestOtp}>
              requestOtp
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
            <label htmlFor="otp"> Enter Otp:</label>
          </div>
          <div className="col">
            <input
              type="number"
              placeholder="enter OTP"
              onChange={(e) => setotp(e.target.value)}
            ></input>
          </div>
          <div className="col">
            <button className="btn btn-success" onClick={vaidateOtp}>
              validate
            </button>
          </div>
        </div>
      </div>
      <div
        className="container mt-2"
        style={{ visibility: passshow ? "visible" : "hidden" }}
      >
        <div className="row">
          <div className="col">
            <label htmlFor="password">Enter your new password here: </label>
          </div>
          <div className="col">
            <input
              type="password"
              onChange={(e) => setnewPass(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <label htmlFor="confirm password">Confirm your password:</label>
          </div>
          <div className="col">
            <input
              type="text"
              onChange={(e) => setconfirmpass(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <button className="btn btn-success" onClick={changepassword}>
              submit
            </button>
          </div>
        </div>
      </div>
      <div id="recaptcha-container"></div>
    </>
  );
}

export default ChangePass;
