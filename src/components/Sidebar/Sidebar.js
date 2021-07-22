import {Container, Row, Col, Button, ListGroup,} from 'react-bootstrap';
import './sidebar.css';

function Sidebar() {
    return (
        <div className='sidebar-content'>
        <div className="sidebar-background"></div>
        
        <div className="logo d-flex align-items-center justify-content-start">
            <a href="" className="simple-text logo-mini mx-1">
                <div className="logo-img">
                    <img src="https://demos.creative-tim.com/light-bootstrap-dashboard-react/static/media/reactlogo.55f6660b.png" alt="..." />
                </div>
            </a>
            <a className="simple-text" href="">Review Analytics</a>
        </div>
            
            <ListGroup className='mt-5 custom-sidemenu'>
                <ListGroup.Item>Dashboard</ListGroup.Item>
                <ListGroup.Item>User Profile</ListGroup.Item>
                <ListGroup.Item>Table List</ListGroup.Item>
                <ListGroup.Item>Typography</ListGroup.Item>
                <ListGroup.Item>Maps</ListGroup.Item>
            </ListGroup>
      </div>
    );
  }
  
  export default Sidebar;