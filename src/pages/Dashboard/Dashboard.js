import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import './dashboard.css';

function Dashboard() {
    return (
      <div className='wrapper'>
        <div className='sidebar'>
          <Sidebar/>  
        </div>
        <div className="main-panel">
          <Header/>
          <section className="mt-4">
          <Container fluid>
                <Row>
                    <Col md={6}>Content</Col>
                    <Col md={2}>Content</Col>
                    <Col md={2}>Content</Col>
                    <Col md={2}>Content</Col>
                </Row>
            </Container>
          </section>
          
        </div>
      </div>
    );
  }
  
  export default Dashboard;