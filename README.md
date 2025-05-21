# 🏢 Office Management System

<div align="center">
  
![Office Management System](https://github.com/damiancodes/office-management-system-dashboard/blob/master/frontend/src/assets/images/analytics.png?raw=true)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Node.js](https://img.shields.io/badge/Node.js-14+-43853D?logo=node.js&logoColor=white)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.4+-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)

</div>

A comprehensive office management system built with the **MERN stack** (MongoDB, Express.js, React, Node.js) that helps organizations manage their resources, employees, and operations efficiently. The platform features a sleek, modern UI and powerful backend to transform how you manage your office operations.

## ✨ Features

<div align="center">
  <table>
    <tr>
      <td width="50%">
        <h3 align="center">📊 Analytics Dashboard</h3>
        <img src="https://github.com/damiancodes/office-management-system-dashboard/blob/master/frontend/src/assets/images/analytics.png?raw=true" alt="Analytics Dashboard">
        <p align="center">Comprehensive financial analytics with interactive charts</p>
      </td>
      <td width="50%">
        <h3 align="center"> User Management</h3>
        <img src="https://github.com/damiancodes/office-management-system-dashboard/blob/master/frontend/src/assets/images/usermanagement.png?raw=true" alt="User Management">
        <p align="center">Complete user profile management with role-based access</p>
      </td>
    </tr>
    <tr>
      <td width="50%">
        <h3 align="center">💰 Admin Dashboard</h3>
        <img src="https://github.com/damiancodes/office-management-system-dashboard/blob/master/frontend/src/assets/images/Admindash.png?raw=true" alt="Admin Dashboard">
        <p align="center">Powerful admin controls with system-wide oversight</p>
      </td>
      <td width="50%">
        <h3 align="center">👤 Employee Onboarding</h3>
        <img src="https://github.com/damiancodes/office-management-system-dashboard/blob/master/frontend/src/assets/images/Addemployee.png?raw=true" alt="Add Employee">
        <p align="center">Streamlined employee addition and onboarding process</p>
      </td>
    </tr>
  </table>
</div>

## Core Features

<div align="center">
  
  <p align="center">
    A comprehensive MERN-stack solution featuring financial analytics, expense tracking, 
    employee management, and secure authentication with role-based access control.
  </p>
  
  <img src="https://img.shields.io/badge/Built_with-MERN_Stack-00D8FF?style=flat-square&logo=react" />
</div>


## 🛠️ Tech Stack

<div align="center">
  <h3>Frontend</h3>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React.js" />
  <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux" />
  <img src="https://img.shields.io/badge/React_Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="React Bootstrap" />
  <img src="https://img.shields.io/badge/Recharts-22B5BF?style=for-the-badge&logo=chart.js&logoColor=white" alt="Recharts" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />
  
  <h3>Backend</h3>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white" alt="JWT" />
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose" />
</div>

##  Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/damiancodes/office-management-system-dashboard.git
cd office-management-system-dashboard
```

2. **Install backend dependencies**
```bash
cd backend
npm install
```

3. **Install frontend dependencies**
```bash
cd ../frontend
npm install
```

4. **Create a .env file in the backend directory**
```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

5. **Start the development servers**

Backend:
```bash
cd backend
npm run dev
```

Frontend:
```bash
cd frontend
npm run dev
```

## 📚 API Documentation

<div align="center">
  <img src="https://github.com/damiancodes/office-management-system-dashboard/blob/master/frontend/src/assets/images/postman.png?raw=true" alt="API Documentation">
</div>

Our API is fully documented with Postman. The collection includes all endpoints with examples and response schemas.

## 💻 Usage Examples

### Employee Management
```javascript
// Add a new employee (Example API call)
const addEmployee = async (employeeData) => {
  try {
    const response = await axios.post('/api/employees', employeeData);
    return response.data;
  } catch (error) {
    console.error('Error adding employee:', error);
    throw error;
  }
};
```

### Expense Tracking
```javascript
// Track a new expense (Example API call)
const addExpense = async (expenseData) => {
  try {
    const response = await axios.post('/api/expenses', expenseData);
    return response.data;
  } catch (error) {
    console.error('Error adding expense:', error);
    throw error;
  }
};
```

##  Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##  Contact

Damian - [GitHub Profile](https://github.com/damiancodes)

Project Link: [https://github.com/damiancodes/office-management-system-dashboard](https://github.com/damiancodes/office-management-system-dashboard)

---

<div align="center">
  <p>
    <a href="https://github.com/damiancodes/office-management-system-dashboard/issues">Report Bug</a>
    ·
    <a href="https://github.com/damiancodes/office-management-system-dashboard/issues">Request Feature</a>
  </p>
  
  <p>If you found this project helpful, please give it a ⭐!</p>
</div>
