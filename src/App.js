//import ListemployeesComponent from "./components/ListemployeesComponent";
import Navbar from "./components/Navbar";
import SaveEmployee from "./components/SaveEmployee";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";
import UpdateEmployee from "./components/UpdateEmployee";
import Homepage from "./components/Homepage";
import EmployeeListComponent from "./components/EmployeeListComponent";
import LoginComponent from "./components/LoginComponent";
import Registercustomer from "./components/Registercustomer";
import HomeCustomer from "./components/HomeCustomer";
import CustomerSettings from "./components/CustomerSettings";
import Signinwithmobile from "./components/Signinwithmobile";
import UpdateMobile from "./components/UpdateMobile";
import ChangePass from "./components/ChangePass";
import UpdateCity from "./components/UpdateCity";
import RegisterCar from "./components/RegisterCar";
import ManageCar from "./components/ManageCar";
import UploadImage from "./components/UploadImage";
import BuyOrSell from "./components/BuyOrSell";
//import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Navbar></Navbar>
                <Homepage></Homepage>
              </>
            }
          ></Route>
          <Route
            exact
            path="/:manage_car/:id"
            element={
              <>
                <Navbar></Navbar>
                <ManageCar></ManageCar>
              </>
            }
          ></Route>
          <Route
            exact
            path="/upload_image/:id"
            element={
              <>
                <Navbar></Navbar>
                <UploadImage></UploadImage>
              </>
            }
          ></Route>
          <Route
            exact
            path="/register_car/:id"
            element={
              <>
                <Navbar></Navbar>
                <RegisterCar></RegisterCar>
              </>
            }
          ></Route>
          <Route
            exact
            path="/change_password/:id"
            element={
              <>
                <Navbar></Navbar>
                <ChangePass></ChangePass>
              </>
            }
          ></Route>
          <Route
            exact
            path="/update_city/:id"
            element={
              <>
                <Navbar></Navbar>
                <UpdateCity></UpdateCity>
              </>
            }
          ></Route>
          <Route
            exact
            path="/mobileauth"
            element={
              <>
                <Navbar></Navbar>
                <Signinwithmobile></Signinwithmobile>
              </>
            }
          ></Route>
          <Route
            excat
            path="/updatemobile/:id"
            element={
              <>
                <Navbar></Navbar>
                <UpdateMobile></UpdateMobile>
              </>
            }
          ></Route>
          <Route
            exact
            path="/customersettings/:id"
            element={
              <>
                <Navbar></Navbar>
                <CustomerSettings></CustomerSettings>
              </>
            }
          ></Route>
          <Route
            exact
            path="/home/:id"
            element={
              <>
                <Navbar></Navbar>
                <HomeCustomer></HomeCustomer>
              </>
            }
          ></Route>
          <Route
            exact
            path="/register_customer"
            element={
              <>
                <Navbar></Navbar>
                <Registercustomer></Registercustomer>
              </>
            }
          ></Route>
          <Route
            exact
            path="/login"
            element={
              <>
                <Navbar></Navbar>
                <LoginComponent></LoginComponent>
              </>
            }
          ></Route>
          <Route
            exact
            path="/employees"
            element={
              <>
                <Navbar></Navbar>
                <EmployeeListComponent />
              </>
            }
          ></Route>
          <Route
            exact
            path="/add_Employees"
            element={
              <>
                <Navbar></Navbar>
                <SaveEmployee title="Employee Form"></SaveEmployee>
              </>
            }
          ></Route>
          <Route
            exact
            path="/:update/:Id"
            element={
              <>
                <Navbar></Navbar>
                <UpdateEmployee title="Update Employee"></UpdateEmployee>
              </>
            }
          ></Route>
          <Route
            exact
            path="sales/sellCar/:id"
            element={
              <>
                <navbar></navbar>
                <BuyOrSell></BuyOrSell>
              </>
            }
          ></Route>
          <Route
            exact
            path="/sales"
            element={
              <>
                <navbar></navbar>
                <BuyOrSell></BuyOrSell>
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
