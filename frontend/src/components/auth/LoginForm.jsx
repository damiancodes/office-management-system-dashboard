// src/components/auth/LoginForm.jsx
import { useState, useEffect } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, setLoading, setError, reset } from '../../redux/slices/authSlice';
import authService from '../../services/authService';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const { email, password } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);
  
  useEffect(() => {
    if (isSuccess || user) {
      navigate('/dashboard');
    }
    
    dispatch(reset());
  }, [user, isSuccess, navigate, dispatch]);
  
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  
  const onSubmit = async (e) => {
    e.preventDefault();
    
    const userData = {
      email,
      password
    };
    
    try {
      dispatch(setLoading(true));
      const user = await authService.login(userData);
      dispatch(login(user));
      navigate('/dashboard');
    } catch (error) {
      const message = 
        (error.response && 
          error.response.data && 
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch(setError(message));
    }
  };
  
  return (
    <div className="login-form">
      <h1 className="mb-4">Login</h1>
      
      {isError && <Alert variant="danger">{message}</Alert>}
      
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control 
            type="email" 
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Enter your email"
            required
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Enter your password"
            required
          />
        </Form.Group>
        
        <Button variant="primary" type="submit" disabled={isLoading} className="w-100">
          {isLoading ? (
            <>
              <Spinner 
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="ms-2">Loading...</span>
            </>
          ) : 'Login'}
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;