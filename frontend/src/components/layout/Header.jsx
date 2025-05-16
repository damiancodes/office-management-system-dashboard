// src/components/layout/Header.jsx
import { useEffect, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/slices/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  
  const onLogout = () => {
    dispatch(logout());
    navigate('/login');
  };
  
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">Office Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {user ? (
            <>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                {user.permissions.employees.view && (
                  <Nav.Link as={Link} to="/employees">Employees</Nav.Link>
                )}
                {user.permissions.assets.view && (
                  <Nav.Link as={Link} to="/assets">Assets</Nav.Link>
                )}
                {user.permissions.expenses.view && (
                  <Nav.Link as={Link} to="/expenses">Expenses</Nav.Link>
                )}
                {user.permissions.income.view && (
                  <Nav.Link as={Link} to="/income">Income</Nav.Link>
                )}
                {user.permissions.analytics.view && (
                  <Nav.Link as={Link} to="/analytics">Analytics</Nav.Link>
                )}
              </Nav>
              <Nav>
                <NavDropdown title={user.name} id="basic-nav-dropdown" align="end">
                  <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={onLogout}>Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </>
          ) : (
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;