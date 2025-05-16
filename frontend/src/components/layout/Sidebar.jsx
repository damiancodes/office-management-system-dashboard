// src/components/layout/Sidebar.jsx
import { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  
  return (
    <div className="sidebar bg-light p-3 border-end">
      <div className="logo mb-4">
        <h4>Office Manager</h4>
      </div>
      <Nav className="flex-column" activeKey={location.pathname}>
        <Nav.Item>
          <Nav.Link as={Link} to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>
            <i className="bi bi-speedometer2 me-2"></i> Dashboard
          </Nav.Link>
        </Nav.Item>
        
        {user && user.permissions.employees.view && (
          <Nav.Item>
            <Nav.Link as={Link} to="/employees" className={location.pathname === '/employees' ? 'active' : ''}>
              <i className="bi bi-people me-2"></i> Employees
            </Nav.Link>
          </Nav.Item>
        )}
        
        {user && user.permissions.assets.view && (
          <Nav.Item>
            <Nav.Link as={Link} to="/assets" className={location.pathname === '/assets' ? 'active' : ''}>
              <i className="bi bi-briefcase me-2"></i> Assets
            </Nav.Link>
          </Nav.Item>
        )}
        
        {user && user.permissions.expenses.view && (
          <Nav.Item>
            <Nav.Link as={Link} to="/expenses" className={location.pathname === '/expenses' ? 'active' : ''}>
              <i className="bi bi-cash-stack me-2"></i> Expenses
            </Nav.Link>
          </Nav.Item>
        )}
        
        {user && user.permissions.income.view && (
          <Nav.Item>
            <Nav.Link as={Link} to="/income" className={location.pathname === '/income' ? 'active' : ''}>
              <i className="bi bi-wallet2 me-2"></i> Income
            </Nav.Link>
          </Nav.Item>
        )}
        
        {user && user.permissions.analytics.view && (
          <Nav.Item>
            <Nav.Link as={Link} to="/analytics" className={location.pathname === '/analytics' ? 'active' : ''}>
              <i className="bi bi-graph-up me-2"></i> Analytics
            </Nav.Link>
          </Nav.Item>
        )}
        
        {user && user.role === 'admin' && (
          <Nav.Item>
            <Nav.Link as={Link} to="/users" className={location.pathname === '/users' ? 'active' : ''}>
              <i className="bi bi-person-badge me-2"></i> User Management
            </Nav.Link>
          </Nav.Item>
        )}
      </Nav>
    </div>
  );
};

export default Sidebar;