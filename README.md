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
        <h3 align="center">👥 User Management</h3>
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

### Core Modules

- **📊 Analytics Dashboard**
  - Real-time financial analytics with interactive charts
  - Income vs Expenses tracking with trend analysis
  - Category-wise expense breakdown with filterable data
  - Monthly trends visualization with export capabilities

- **💰 Expense Management**
  - Track and categorize expenses with receipt upload
  - Recurring expense management with notification system
  - Payment method tracking with integration options
  - Multi-level approval workflow with audit trails

- **👥 Employee Management**
  - Comprehensive employee profiles with document storage
  - Granular permission-based access control
  - Department and team hierarchy management
  - Performance tracking and review system

- **🔐 Authentication & Authorization**
  - Secure JWT-based user authentication
  - Role-based access control with custom permissions
  - Protected routes with session management
  - Two-factor authentication (optional)

## 🛠️ Tech Stack

<div align="center">
  <table>
    <tr>
      <th>Frontend</th>
      <th>Backend</th>
    </tr>
    <tr>
      <td>
        <ul>
          <li>⚛️ React.js</li>
          <li>🔄 Redux for state management</li>
          <li>🎨 React Bootstrap for UI components</li>
          <li>📊 Recharts for data visualization</li>
          <li>🌐 Axios for API calls</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>🟢 Node.js</li>
          <li>⚡ Express.js</li>
          <li>🍃 MongoDB</li>
          <li>🔑 JWT for authentication</li>
          <li>🔄 Mongoose for ODM</li>
        </ul>
      </td>
    </tr>
  </table>
</div>

## 📁 Project Structure

```
office-management-system/
├── frontend/               # React frontend
│   ├── src/
│   │   ├── assets/        # Images and static files
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── redux/         # Redux store and slices
│   │   ├── services/      # API services
│   │   └── utils/         # Utility functions
│   └── public/            # Public assets
│
└── backend/               # Node.js backend
    ├── config/           # Configuration files
    ├── controllers/      # Route controllers
    ├── middleware/       # Custom middleware
    ├── models/          # Database models
    ├── routes/          # API routes
    └── utils/           # Utility functions
```

## 🚀 Getting Started

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

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

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
