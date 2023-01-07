import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import RegisteredCarService from "../services/RegisteredCarService";

function RegisterCar() {
  const history = useNavigate();
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
    company: "",
    carName: "",
    car_version: "",
    model: 0,
    seater: 0,
    engine: 0,
    color: "",
    fuelType: "",
    gearType: "",
    registeredDate: date,
    customerId: id,
  });
  function handleClick(e) {
    const newData = { ...Data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  function handleSubmit(e) {
    //alert(JSON.stringify(Data))
    let registeredCar = {
      id: Data.id,
      company: Data.company,
      carName: Data.carName,
      car_version: Data.car_version,
      model: Data.model,
      seater: Data.seater,
      engine: Data.engine,
      color: Data.color,
      fuelType: Data.fuelType,
      gearType: Data.gearType,
      registeredDate: Data.registeredDate,
      customerId: Data.customerId,
    };
    RegisteredCarService.saveCarDetails(registeredCar).then((res) => {
      alert("Vehicle Registered successfully");
    });
    history("/home/" + id);
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
        <div className="card container" style={{ width: 600, height: 550 }}>
          <div
            className="card-header text-light my-3"
            style={{ backgroundColor: "gray" }}
          >
            <strong> Register your vehicle</strong>
          </div>
          <div
            className="card-body "
            style={{ alignItems: "center", backgroundColor: "cyan" }}
          >
            <form className="container my-1" onSubmit={(e) => handleSubmit(e)}>
              <div className="row">
                <div className="form-outline mb-4 col">
                  <label className="form-label" htmlFor="form2Example1">
                    Manufacturer Name
                  </label>
                  <input
                    id="company"
                    placeholder="ex:hyundai,nissan,etc"
                    onChange={(e) => handleClick(e)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-outline mb-4 col">
                  <label className="form-label" htmlFor="form2Example2">
                    Car Name
                  </label>
                  <input
                    id="carName"
                    placeholder="ex:i10,micra"
                    onChange={(e) => handleClick(e)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-outline mb-4 col">
                  <label className="form-label" htmlFor="form2Example2">
                    version
                  </label>
                  <input
                    type="text"
                    id="car_version"
                    placeholder="ex:asta,magna"
                    onChange={(e) => handleClick(e)}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-outline mb-4 col">
                  <label className="form-label" htmlFor="form2Example2">
                    manufacturing year
                  </label>
                  <input
                    type="number"
                    id="model"
                    onChange={(e) => handleClick(e)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-outline mb-4 col">
                  <label className="form-label" htmlFor="form2Example2">
                    No of seats
                  </label>
                  <input
                    type="number"
                    id="seater"
                    placeholder="5 or 7"
                    onChange={(e) => handleClick(e)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-outline mb-4 col">
                  <label className="form-label" htmlFor="form2Example2">
                    Engine cc
                  </label>
                  <input
                    type="number"
                    id="engine"
                    placeholder="ex:800,1100"
                    onChange={(e) => handleClick(e)}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-outline mb-4 col">
                  <label className="form-label" htmlFor="form2Example2">
                    color
                  </label>
                  <input
                    type="text"
                    id="color"
                    onChange={(e) => handleClick(e)}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-outline mb-4 col">
                  <label className="form-label" htmlFor="form2Example2">
                    Gear type
                  </label>
                  <select
                    class="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    id="gearType"
                    onChange={(e) => handleClick(e)}
                  >
                    <option selected>Gear Type</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                  </select>
                </div>
                <div className="form-outline mb-4 col">
                  <label className="form-label" htmlFor="form2Example2">
                    Fuel type
                  </label>
                  <select
                    class="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    id="fuelType"
                    onChange={(e) => handleClick(e)}
                  >
                    <option selected>Fuel Type</option>
                    <option value="petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="LPG">LPG</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-block mb-1">
                submit
              </button>
              <Link to="/" className="btn btn-info btn-block mb-1 mx-2">
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

export default RegisterCar;
