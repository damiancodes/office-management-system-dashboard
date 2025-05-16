// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainLayout from './components/layout/MainLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/common/ProtectedRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/styles/main.css';

function App() {
  const { user } = useSelector((state) => state.auth);
  
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={user ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        
          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
            {/* Add other protected routes here */}
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;