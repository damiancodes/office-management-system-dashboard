// src/components/layout/MainLayout.jsx
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';

const MainLayout = () => {
  const { user } = useSelector((state) => state.auth);
  
  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      <Container fluid className="flex-grow-1">
        <Row className="h-100">
          {user && (
            <Col md={3} lg={2} className="d-none d-md-block p-0">
              <Sidebar />
            </Col>
          )}
          <Col md={user ? 9 : 12} lg={user ? 10 : 12} className="py-3">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainLayout;