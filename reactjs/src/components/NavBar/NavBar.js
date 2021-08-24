import {
    Navbar,
    Container,
    Nav
  } from 'react-bootstrap'
  
  function NavBar() {
    return (
      <Navbar bg="primary" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Github Analytics</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-end">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Dashboard</Nav.Link>
              <Nav.Link href="#link">Repos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavBar;