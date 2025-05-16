import api from './api';

// Get all employees
const getEmployees = async () => {
  const response = await api.get('/employees');
  return response.data;
};

// Get single employee
const getEmployee = async (id) => {
  const response = await api.get(`/employees/${id}`);
  return response.data;
};

// Create employee
const createEmployee = async (employeeData) => {
  const response = await api.post('/employees', employeeData);
  return response.data;
};

// Update employee
const updateEmployee = async (id, employeeData) => {
  const response = await api.put(`/employees/${id}`, employeeData);
  return response.data;
};

// Delete employee
const deleteEmployee = async (id) => {
  const response = await api.delete(`/employees/${id}`);
  return response.data;
};

const employeeService = {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee
};

export default employeeService;