import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import RegisteredCarService from "../services/RegisteredCarService";

export default function Manage_Car() {
  const location = useLocation();
  const history = useNavigate();
  const [Buy, setBuy] = useState(false);
  const [Verify, setVerify] = useState(false);
  const { id } = useParams();
  const [Data, setData] = useState([]);
  const { manage_car } = useParams();
  const [show, setshow] = useState(false);
  // eslint-disable-next-line
  useEffect(() => {
    if (manage_car === "manage_car" || manage_car === "buy") {
      setshow(true);
    } else {
      setshow(false);
      setBuy(true);
    }
  });
  function handleDelete(carId) {
    RegisteredCarService.DeleteCar(carId).then((res) => {
      if (res.data === true) {
        alert("car Deleted Successfully");
      } else {
        alert("error occured");
      }
    });
    history("/home/" + id);
  }
  function handleSell(r_id) {
    RegisteredCarService.getCarById(r_id).then((res) => {
      setData(res.data);
    });
    alert("scroll down to verify your car details");
    setVerify(true);
  }
  function uploadImage() {
    history("/upload_image/" + Data.id);
  }
  return (
    <>
      <div className="container">
        <button
          className="btn btn-outline-primary mt-2"
          style={{ display: Buy ? "block" : "none" }}
        >
          Buy Used Cars
        </button>
        <p className="text-center text-success mt-1">
          <strong style={{ fontSize: 30 }}>
            Cars Registered with our company with customer id:{id}
          </strong>
        </p>
        <table className="table table-striped tabel-bordered">
          <thead>
            <tr>
              <th scope="col">company</th>
              <th scope="col">car Name</th>
              <th scope="col">Number of seats</th>
              <th scope="col">engine capacity</th>
              <th scope="col">color</th>
              <th scope="col">year of manufacturing</th>
              <th scope="col">Registerd date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {location.state.map((value) => (
              <tr key={value.id}>
                <td>{value.company}</td>
                <td>{value.carName}</td>
                <td>{value.seater}</td>
                <td>{value.engine + " cc"}</td>
                <td>{value.color}</td>
                <td>{value.model}</td>
                <td>{value.registeredDate}</td>

                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => handleSell(value.id)}
                  >
                    sell
                  </button>
                  <button
                    className="btn btn-danger mx-1"
                    style={{ visibility: show ? "visible" : "hidden" }}
                    onClick={() => handleDelete(value.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="container" style={{ display: Verify ? "block" : "none" }}>
        <strong>Verify your details</strong>
        <form>
          <div className="row">
            <div className="col">
              <label>
                <strong>Company:</strong>
              </label>
            </div>
            <div className="col">
              <label>
                <strong>Car Name:</strong>
              </label>
            </div>
          </div>
          <div className=" row">
            <div className="col">
              <input defaultValue={Data.company} disabled={true}></input>
            </div>
            <div className="col">
              <input defaultValue={Data.carName} disabled={true}></input>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>
                <strong>version:</strong>
              </label>
            </div>
            <div className="col">
              <label>
                <strong>Manufacturing year:</strong>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input defaultValue={Data.car_version} disabled={true}></input>
            </div>
            <div className="col">
              <input defaultValue={Data.model} disabled={true}></input>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>
                <strong>number of seats:</strong>
              </label>
            </div>
            <div className="col">
              <label>
                <strong>Engine Capacity (cc):</strong>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input defaultValue={Data.seater} disabled={true}></input>
            </div>
            <div className="col">
              <input defaultValue={Data.engine} disabled={true}></input>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>
                <strong>color:</strong>
              </label>
            </div>
            <div className="col">
              <label>
                <strong>gearType:</strong>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input defaultValue={Data.color} disabled={true}></input>
            </div>
            <div className="col">
              <input defaultValue={Data.gearType} disabled={true}></input>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>
                <strong>fuel Type:</strong>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input defaultValue={Data.fuelType} disabled={true}></input>
            </div>
          </div>
        </form>
        <button
          type="button"
          class="btn btn-secondary mt-1"
          onClick={() => {
            setVerify(false);
          }}
        >
          cancel
        </button>
        <button
          type="button"
          class="btn btn-primary mt-1 mx-1"
          data-bs-toggle="modal"
          data-bs-target="#mymodal"
        >
          Verify
        </button>
      </div>
      <div
        class="modal"
        id="mymodal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: "blue" }}>
              <h5 className="modal-title" id="exampleModalLabel">
                <strong className="text-light">Sure?</strong>
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Are you sure want to sell your car?
            </div>
            <div class="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                no
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
                onClick={() => uploadImage()}
              >
                yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
