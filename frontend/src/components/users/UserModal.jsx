// Continuing the UserModal component

import { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col, Spinner } from 'react-bootstrap';
import api from '../../services/api';

const UserModal = ({ show, onHide, user, isEdit, onUserCreated, onUserUpdated }) => {
  const initialFormState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'employee',
    isActive: true,
    permissions: {
      employees: {
        view: false,
        create: false,
        update: false,
        delete: false
      },
      assets: {
        view: false,
        create: false,
        update: false,
        delete: false
      },
      expenses: {
        view: false,
        create: false,
        update: false,
        delete: false
      },
      income: {
        view: false,
        create: false,
        update: false,
        delete: false
      },
      analytics: {
        view: false
      }
    }
  };
  
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [validated, setValidated] = useState(false);
  
  useEffect(() => {
    if (user && isEdit) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        password: '',
        confirmPassword: '',
        role: user.role || 'employee',
        isActive: user.isActive !== undefined ? user.isActive : true,
        permissions: {
          employees: {
            view: user.permissions?.employees?.view || false,
            create: user.permissions?.employees?.create || false,
            update: user.permissions?.employees?.update || false,
            delete: user.permissions?.employees?.delete || false
          },
          assets: {
            view: user.permissions?.assets?.view || false,
            create: user.permissions?.assets?.create || false,
            update: user.permissions?.assets?.update || false,
            delete: user.permissions?.assets?.delete || false
          },
          expenses: {
            view: user.permissions?.expenses?.view || false,
            create: user.permissions?.expenses?.create || false,
            update: user.permissions?.expenses?.update || false,
            delete: user.permissions?.expenses?.delete || false
          },
          income: {
            view: user.permissions?.income?.view || false,
            create: user.permissions?.income?.create || false,
            update: user.permissions?.income?.update || false,
            delete: user.permissions?.income?.delete || false
          },
          analytics: {
            view: user.permissions?.analytics?.view || false
          }
        }
      });
    } else {
      setFormData(initialFormState);
    }
    
    setValidated(false);
    setError('');
  }, [user, isEdit, show]);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      // Handle permission checkboxes
      if (name.includes('.')) {
        const [module, action] = name.split('.');
        setFormData(prev => ({
          ...prev,
          permissions: {
            ...prev.permissions,
            [module]: {
              ...prev.permissions[module],
              [action]: checked
            }
          }
        }));
      } else {
        // Handle direct checkboxes like isActive
        setFormData(prev => ({
          ...prev,
          [name]: checked
        }));
      }
    } else {
      // Handle regular inputs
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };
  
  const handleRoleChange = (e) => {
    const role = e.target.value;
    
    // Set default permissions based on role
    let newPermissions = { ...formData.permissions };
    
    if (role === 'admin') {
      // Admin has all permissions
      newPermissions = {
        employees: { view: true, create: true, update: true, delete: true },
        assets: { view: true, create: true, update: true, delete: true },
        expenses: { view: true, create: true, update: true, delete: true },
        income: { view: true, create: true, update: true, delete: true },
        analytics: { view: true }
      };
    } else if (role === 'manager') {
      // Manager has view permissions for everything, create/update for most things
      newPermissions = {
        employees: { view: true, create: true, update: true, delete: false },
        assets: { view: true, create: true, update: true, delete: false },
        expenses: { view: true, create: true, update: true, delete: false },
        income: { view: true, create: true, update: true, delete: false },
        analytics: { view: true }
      };
    } else {
      // Regular employee has limited permissions
      newPermissions = {
        employees: { view: true, create: false, update: false, delete: false },
        assets: { view: true, create: false, update: false, delete: false },
        expenses: { view: true, create: true, update: false, delete: false },
        income: { view: true, create: false, update: false, delete: false },
        analytics: { view: false }
      };
    }
    
    setFormData(prev => ({
      ...prev,
      role,
      permissions: newPermissions
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    
    // Validate passwords
    if (!isEdit && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    try {
      setLoading(true);
      setError('');
      
      // Prepare user data
      const userData = {
        name: formData.name,
        email: formData.email,
        role: formData.role,
        isActive: formData.isActive,
        permissions: formData.permissions
      };
      
      // Add password only for new users
      if (!isEdit && formData.password) {
        userData.password = formData.password;
      }
      
      let response;
      
      if (isEdit) {
        // Update existing user
        response = await api.put(`/auth/users/${user._id}`, userData);
        onUserUpdated(response.data);
      } else {
        // Create new user
        response = await api.post('/auth/users', userData);
        onUserCreated(response.data);
      }
      
      onHide();
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Modal show={show} onHide={onHide} backdrop="static" size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{isEdit ? 'Edit User' : 'Add New User'}</Modal.Title>
      </Modal.Header>
      
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Body>
          {error && <div className="alert alert-danger">{error}</div>}
          
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a name.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          
          {!isEdit && (
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required={!isEdit}
                    minLength={6}
                  />
                  <Form.Control.Feedback type="invalid">
                    Password must be at least 6 characters.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required={!isEdit}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please confirm the password.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
          )}
          
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Role</Form.Label>
                <Form.Select 
                  name="role"
                  value={formData.role}
                  onChange={handleRoleChange}
                  required
                >
                  <option value="admin">Admin</option>
                  <option value="manager">Manager</option>
                  <option value="employee">Employee</option>
                </Form.Select>
              </Form.Group>
            </Col>
            
            <Col md={6}>
              <Form.Group className="mb-3 d-flex align-items-center h-100">
                <Form.Check 
                  type="checkbox"
                  label="Active Account"
                  name="isActive"
                  checked={formData.isActive}
                  onChange={handleChange}
                  className="mt-4"
                />
              </Form.Group>
            </Col>
          </Row>
          
          <hr />
          <h5>Permissions</h5>
          <p className="text-muted">These will override the default permissions for the selected role.</p>
          
          <div className="mb-3">
            <h6>Employees</h6>
            <div className="d-flex gap-4">
              <Form.Check 
                type="checkbox"
                label="View"
                name="employees.view"
                checked={formData.permissions.employees.view}
                onChange={handleChange}
              />
              <Form.Check 
                type="checkbox"
                label="Create"
                name="employees.create"
                checked={formData.permissions.employees.create}
                onChange={handleChange}
              />
              <Form.Check 
                type="checkbox"
                label="Update"
                name="employees.update"
                checked={formData.permissions.employees.update}
                onChange={handleChange}
              />
              <Form.Check 
                type="checkbox"
                label="Delete"
                name="employees.delete"
                checked={formData.permissions.employees.delete}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="mb-3">
            <h6>Assets</h6>
            <div className="d-flex gap-4">
              <Form.Check 
                type="checkbox"
                label="View"
                name="assets.view"
                checked={formData.permissions.assets.view}
                onChange={handleChange}
              />
              <Form.Check 
                type="checkbox"
                label="Create"
                name="assets.create"
                checked={formData.permissions.assets.create}
                onChange={handleChange}
              />
              <Form.Check 
                type="checkbox"
                label="Update"
                name="assets.update"
                checked={formData.permissions.assets.update}
                onChange={handleChange}
              />
              <Form.Check 
                type="checkbox"
                label="Delete"
                name="assets.delete"
                checked={formData.permissions.assets.delete}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="mb-3">
            <h6>Expenses</h6>
            <div className="d-flex gap-4">
              <Form.Check 
                type="checkbox"
                label="View"
                name="expenses.view"
                checked={formData.permissions.expenses.view}
                onChange={handleChange}
              />
              <Form.Check 
                type="checkbox"
                label="Create"
                name="expenses.create"
                checked={formData.permissions.expenses.create}
                onChange={handleChange}
              />
              <Form.Check 
                type="checkbox"
                label="Update"
                name="expenses.update"
                checked={formData.permissions.expenses.update}
                onChange={handleChange}
              />
              <Form.Check 
                type="checkbox"
                label="Delete"
                name="expenses.delete"
                checked={formData.permissions.expenses.delete}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="mb-3">
            <h6>Income</h6>
            <div className="d-flex gap-4">
              <Form.Check 
                type="checkbox"
                label="View"
                name="income.view"
                checked={formData.permissions.income.view}
                onChange={handleChange}
              />
              <Form.Check 
                type="checkbox"
                label="Create"
                name="income.create"
                checked={formData.permissions.income.create}
                onChange={handleChange}
              />
              <Form.Check 
                type="checkbox"
                label="Update"
                name="income.update"
                checked={formData.permissions.income.update}
                onChange={handleChange}
              />
              <Form.Check 
                type="checkbox"
                label="Delete"
                name="income.delete"
                checked={formData.permissions.income.delete}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="mb-3">
            <h6>Analytics</h6>
            <div className="d-flex gap-4">
              <Form.Check 
                type="checkbox"
                label="View"
                name="analytics.view"
                checked={formData.permissions.analytics.view}
                onChange={handleChange}
              />
            </div>
          </div>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? (
              <>
                <Spinner 
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                <span className="ms-2">Saving...</span>
              </>
            ) : (
              isEdit ? 'Update' : 'Save'
            )}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default UserModal;