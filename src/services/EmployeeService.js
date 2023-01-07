import axios from "axios";

class EmployeeService {
  getEmployees() {
    const employee_base_url = "http://localhost:8080/api/v1/Employees";
    return axios.get(employee_base_url);
  }
  createEmployee(employee) {
    const url = "http://localhost:8080/api/v1/employees_save";
    return axios.post(url, employee);
  }
  getEmployeeById(employeeId) {
    var g_url = "http://localhost:8080/api/v1/employee";
    return axios.get(g_url + "/" + employeeId);
  }
  updateEmployee(employee, employeeId) {
    var u_url = "http://localhost:8080/api/v1/employee";
    return axios.put(u_url + "/" + employeeId, employee);
  }
  deleteEmployee(id) {
    var d_url = "http://localhost:8080/api/v1/employee";
    return axios.delete(d_url + "/" + id);
  }
}

export default new EmployeeService();
