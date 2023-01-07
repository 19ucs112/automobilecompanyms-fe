import axios from "axios";

class SaleCarService {
  postCar(SaleCar) {
    console.log(JSON.stringify(SaleCar));
    var url = "http://localhost:8080/api/v4/sellCar/";
    return axios.post(url, SaleCar);
  }
}
export default new SaleCarService();
