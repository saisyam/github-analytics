import { Container, Row, Col } from 'react-bootstrap';
import './header.css';

function Header() {
    return (
        <nav className='navbar'>
            <Container fluid>
                <Row>
                    <Col>Header Content</Col>
                </Row>
            </Container>
        </nav>  
    );
  }
  
  export default Header;