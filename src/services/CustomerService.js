import axios from "axios";

class CustomerService {
  saveCustomer(customer) {
    const url = "http://localhost:8080/api/v2/customer_save";
    return axios.post(url, customer);
  }
  authenticateCustomer(id, password) {
    var au_url = "http://localhost:8080/api/v2/customer_authenticate";
    return axios.get(au_url + "/" + id + "/" + password);
  }
  getfirstName(id) {
    var fn_url = "http://localhost:8080/api/v2/customer";
    return axios.get(fn_url + "/" + id);
  }
  getCustomerbyId(id) {
    var g_url = "http://localhost:8080/api/v2/customer_get/";
    return axios.get(g_url + id);
  }
  findCustomerById(id) {
    var f_url = "http://localhost:8080/api/v2/customer_find/";
    return axios.get(f_url + id);
  }
  updateMobile(id, customer) {
    var u_m_url = "http://localhost:8080/api/v2/update_mobile/";
    return axios.put(u_m_url + id, customer);
  }
  changePassword(id, customer) {
    var ch_url = "http://localhost:8080/api/v2/change_password/";
    return axios.put(ch_url + id, customer);
  }
  updateCity(id, customer) {
    var u_c_url = "http://localhost:8080/api/v2/update_city/";
    return axios.put(u_c_url + id, customer);
  }
  delete(id) {
    var d_url = "http://localhost:8080/api/v2/delete/";
    return axios.delete(d_url + id);
  }
}
export default new CustomerService();
