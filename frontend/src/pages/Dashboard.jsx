// src/pages/Dashboard.jsx
import { useState, useEffect } from 'react';
import { Row, Col, Card, Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import api from '../services/api';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useSelector((state) => state.auth);
  
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await api.get('/analytics/dashboard');
        setDashboardData(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch dashboard data');
        setLoading(false);
      }
    };
    
    fetchDashboardData();
  }, []);
  
  if (loading) {
    return <div className="text-center my-5"><h3>Loading dashboard data...</h3></div>;
  }
  
  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }
  
  return (
    <div className="dashboard">
      <h1 className="mb-4">Dashboard</h1>
      
      <Row>
        <Col md={3}>
          <Card className="mb-4 bg-primary text-white">
            <Card.Body>
              <h5>Employees</h5>
              <h2>{dashboardData?.counts?.employees || 0}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-4 bg-success text-white">
            <Card.Body>
              <h5>Assets</h5>
              <h2>{dashboardData?.counts?.assets || 0}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-4 bg-warning text-dark">
            <Card.Body>
              <h5>Monthly Income</h5>
              <h2>${dashboardData?.financialSummary?.currentMonth?.income.toLocaleString() || 0}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-4 bg-danger text-white">
            <Card.Body>
              <h5>Monthly Expenses</h5>
              <h2>${dashboardData?.financialSummary?.currentMonth?.expenses.toLocaleString() || 0}</h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Header>
              <h5 className="mb-0">Recent Activity</h5>
            </Card.Header>
            <Card.Body>
              {dashboardData?.recentActivity?.expenses?.length > 0 ? (
                <div>
                  <h6>Recent Expenses</h6>
                  <ul className="list-group mb-3">
                    {dashboardData.recentActivity.expenses.map((expense) => (
                      <li key={expense._id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                          <strong>{expense.title}</strong> - {expense.category}
                          <div className="text-muted small">{new Date(expense.date).toLocaleDateString()}</div>
                        </div>
                        <span className="badge bg-danger rounded-pill">${expense.amount.toLocaleString()}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p>No recent expenses</p>
              )}
              
              {dashboardData?.recentActivity?.income?.length > 0 ? (
                <div>
                  <h6>Recent Income</h6>
                  <ul className="list-group">
                    {dashboardData.recentActivity.income.map((income) => (
                      <li key={income._id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                          <strong>{income.title}</strong> - {income.category}
                          <div className="text-muted small">{new Date(income.date).toLocaleDateString()}</div>
                        </div>
                        <span className="badge bg-success rounded-pill">${income.amount.toLocaleString()}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p>No recent income</p>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Header>
              <h5 className="mb-0">Financial Summary</h5>
            </Card.Header>
            <Card.Body>
              <div className="mb-3">
                <h6>Current Month: {new Date().toLocaleString('default', { month: 'long' })} {new Date().getFullYear()}</h6>
              </div>
              
              <div className="d-flex justify-content-between mb-2">
                <span>Income:</span>
                <strong className="text-success">${dashboardData?.financialSummary?.currentMonth?.income.toLocaleString() || 0}</strong>
              </div>
              
              <div className="d-flex justify-content-between mb-2">
                <span>Expenses:</span>
                <strong className="text-danger">${dashboardData?.financialSummary?.currentMonth?.expenses.toLocaleString() || 0}</strong>
              </div>
              
              <div className="d-flex justify-content-between mb-2">
                <span>Profit:</span>
                <strong className={dashboardData?.financialSummary?.currentMonth?.profit >= 0 ? "text-success" : "text-danger"}>
                  ${dashboardData?.financialSummary?.currentMonth?.profit.toLocaleString() || 0}
                </strong>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;