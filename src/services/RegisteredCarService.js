import axios from "axios";

class RegisteredCarService {
  getCarDetails(id) {
    var url = "http://localhost:8080/api/v3/getcar/";
    return axios.get(url + id);
  }

  saveCarDetails(registeredCar) {
    var url = "http://localhost:8080/api/v3/savecar";
    return axios.post(url, registeredCar);
  }
  DeleteCar(id) {
    var url = "http://localhost:8080/api/v3/deletecar/";
    return axios.delete(url + id);
  }
  getCarById(id) {
    var url = "http://localhost:8080/api/v3/getcardetails/";
    return axios.get(url + id);
  }
  saveImage(formData) {
    var url = "https://api.cloudinary.com/v1_1/dkagwekbn/image/upload/";
    return axios.post(url, formData);
  }
  getallDetails(id) {
    var url = "http://localhost:8080/api/v3/getalldetails/";
    return axios.get(url + id);
  }
}
export default new RegisteredCarService();
