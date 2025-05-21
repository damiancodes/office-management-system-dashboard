# Office Management System

A comprehensive office management system built with the MERN stack (MongoDB, Express.js, React, Node.js) that helps organizations manage their resources, employees, and operations efficiently.

## Features

- 📊 **Analytics Dashboard**
  - Financial analytics with interactive charts
  - Income vs Expenses tracking
  - Category-wise expense breakdown
  - Monthly trends visualization

- 💰 **Expense Management**
  - Track and categorize expenses
  - Recurring expense management
  - Payment method tracking
  - Approval workflow

- 👥 **Employee Management**
  - Employee profiles and roles
  - Permission-based access control
  - Department management

- 🔐 **Authentication & Authorization**
  - Secure user authentication
  - Role-based access control
  - Protected routes

## Tech Stack

### Frontend
- React.js
- Redux for state management
- React Bootstrap for UI components
- Recharts for data visualization
- Axios for API calls

### Backend
- Node.js
- Express.js
- MongoDB
- JWT for authentication
- Mongoose for ODM

## Project Structure

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

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/office-management-system.git
cd office-management-system
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd ../frontend
npm install
```

4. Create a .env file in the backend directory with the following variables:
```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

5. Start the development servers

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

## API Documentation

[Postman endpoints will be added here]

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/office-management-system](https://github.com/yourusername/office-management-system) 