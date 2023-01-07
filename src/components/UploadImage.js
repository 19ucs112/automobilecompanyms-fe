import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RegisteredCarService from "../services/RegisteredCarService";
import SaleCarService from "../services/SaleCarService";

export default function UploadImage() {
  const today = new Date();
  var year = `${today.getFullYear()}`;
  var month = `${today.getMonth() + 1}`;
  if (month < 10) {
    month = "0" + month;
  }
  var day = `${today.getDate()}`;
  if (day < 10) {
    day = "0" + day;
  }
  const date = year + "-" + month + "-" + day;
  const { id } = useParams();
  const [Data, setData] = useState({
    id: "",
    r_id: id,
    registeredDate: date,
  });
  const [numberplate, setnumberplate] = useState("");
  const [desc, setdesc] = useState("");
  const [Price, setprice] = useState(0);
  const [Status, setstatus] = useState("posted");
  const [image1, setimage1] = useState("");
  const [image2, setimage2] = useState("");
  const [image3, setimage3] = useState("");
  const [image4, setimage4] = useState("");
  const [image5, setimage5] = useState("");
  const [image6, setimage6] = useState("");
  const history = useNavigate();
  function sellcar() {
    setstatus("posted");
    setData({ id: "" });
    if (desc.length <= 250) {
      let SaleCar = {
        id: Data.id,
        numberPlate: numberplate,
        price: Price,
        image1: image1,
        image2: image2,
        image3: image3,
        image4: image4,
        image5: image5,
        image6: image6,
        r_id: Data.r_id,
        status: Status,
        registeredDate: date,
        about: desc,
      };
      SaleCarService.postCar(SaleCar).then((res) => {
        if (res === "") {
          alert("some error occured");
        } else {
          history("sales/sellCar/" + res.data);
          alert("Car added to selling list successfully");
        }
      });
    } else {
      alert("Description cannot ne longer than 250 characters");
    }
  }
  function saveImage1(e) {
    if (
      e.target.files[0].type === "image/jpeg" ||
      e.target.files[0].type === "image/jpg"
    ) {
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      formData.append("upload_preset", "uso7nlpq");
      axios
        .post(
          "https://api.cloudinary.com/v1_1/dkagwekbn/image/upload/",
          formData
        )
        .then((res) => {
          setimage1(res.data.public_id);
        });
    } else {
      alert("only jpeg and jpg format images are accepted");
    }
  }
  function saveImage2(e) {
    if (
      e.target.files[0].type === "image/jpeg" ||
      e.target.files[0].type === "image/jpg"
    ) {
      var formData = new FormData();
      formData.append("file", e.target.files[0]);
      formData.append("upload_preset", "default-preset");
      RegisteredCarService.saveImage(formData).then((res) => {
        setimage2(res.data.public_id);
      });
    } else {
      alert("only jpeg and jpg format images are accepted");
    }
  }
  function saveImage3(e) {
    if (
      e.target.files[0].type === "image/jpeg" ||
      e.target.files[0].type === "image/jpg"
    ) {
      var formData = new FormData();
      formData.append("file", e.target.files[0]);
      formData.append("upload_preset", "default-preset");
      RegisteredCarService.saveImage(formData).then((res) => {
        setimage3(res.data.public_id);
      });
    } else {
      alert("only jpeg and jpg format images are accepted");
    }
  }
  function saveImage4(e) {
    if (
      e.target.files[0].type === "image/jpeg" ||
      e.target.files[0].type === "image/jpg"
    ) {
      var formData = new FormData();
      formData.append("file", e.target.files[0]);
      formData.append("upload_preset", "default-preset");
      RegisteredCarService.saveImage(formData).then((res) => {
        setimage4(res.data.public_id);
      });
    } else {
      alert("only jpeg and jpg format images are accepted");
    }
  }
  function saveImage5(e) {
    if (
      e.target.files[0].type === "image/jpeg" ||
      e.target.files[0].type === "image/jpg"
    ) {
      var formData = new FormData();
      formData.append("file", e.target.files[0]);
      formData.append("upload_preset", "default-preset");
      RegisteredCarService.saveImage(formData).then((res) => {
        setimage5(res.data.public_id);
      });
    } else {
      alert("only jpeg and jpg format images are accepted");
    }
  }
  function saveImage6(e) {
    if (
      e.target.files[0].type === "image/jpeg" ||
      e.target.files[0].type === "image/jpg"
    ) {
      var formData = new FormData();
      formData.append("file", e.target.files[0]);
      formData.append("upload_preset", "default-preset");
      RegisteredCarService.saveImage(formData).then((res) => {
        setimage6(res.data.public_id);
      });
    } else {
      alert("only jpeg and jpg format images are accepted");
    }
  }
  return (
    <>
      <div className="container">
        <p style={{ fontSize: 24 }} className="text-center text-success">
          <strong>
            Upload valid images of your vehicle in jpeg or jpg format
          </strong>
        </p>
        <div className="card">
          <div className="container">
            <div className="input-group mt-2">
              <input
                type="file"
                className="form-control"
                id="inputGroupFile04"
                aria-describedby="inputGroupFileAddon04"
                aria-label="Upload"
                onChange={(e) => saveImage1(e)}
                required
              />
            </div>
            <div className="input-group mt-2">
              <input
                type="file"
                className="form-control"
                id="inputGroupFile04"
                aria-describedby="inputGroupFileAddon04"
                aria-label="Upload"
                onChange={(e) => saveImage2(e)}
                required
              />
            </div>
            <div className="input-group mt-2">
              <input
                type="file"
                className="form-control"
                id="inputGroupFile04"
                aria-describedby="inputGroupFileAddon04"
                aria-label="Upload"
                onChange={(e) => saveImage3(e)}
                required
              />
            </div>
            <div className="input-group mt-2">
              <input
                type="file"
                className="form-control"
                id="inputGroupFile04"
                aria-describedby="inputGroupFileAddon04"
                aria-label="Upload"
                onChange={(e) => saveImage4(e)}
                required
              />
            </div>
            <div className="input-group mt-2">
              <input
                type="file"
                className="form-control"
                id="inputGroupFile04"
                aria-describedby="inputGroupFileAddon04"
                aria-label="Upload"
                onChange={(e) => saveImage5(e)}
                required
              />
            </div>
            <div className="input-group mt-2 mb-2">
              <input
                type="file"
                className="form-control"
                id="inputGroupFile04"
                aria-describedby="inputGroupFileAddon04"
                aria-label="Upload"
                onChange={(e) => saveImage6(e)}
                required
              />
            </div>
            <button
              className="mb-2 btn btn-outline-primary"
              data-bs-toggle="modal"
              data-bs-target="#mymodal"
            >
              submit
            </button>
          </div>
        </div>
      </div>
      <div
        className="modal"
        id="mymodal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: "blue" }}>
              <h5 className="modal-title" id="exampleModalLabel">
                <strong className="text-light">Sell Car</strong>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col">
                    <label>Price</label>
                  </div>
                  <div className="col">
                    <label>Vehicle PR number (Number plate)</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input
                      type="number"
                      placeholder="Enter the selling price in rupees"
                      onChange={(e) => setprice(e.target.value)}
                    ></input>
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      placeholder="Enter PR number"
                      onChange={(e) => setnumberplate(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label>Description (max 250 characters)</label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      onChange={(e) => setdesc(e.target.value)}
                      rows="3"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                cancel
              </button>
              <button
                type="submit"
                className="btn btn-success"
                data-bs-dismiss="modal"
                onClick={() => sellcar()}
              >
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
