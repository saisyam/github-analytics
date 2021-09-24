import NavBar from "./components/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import BasicDetails from "./views/BasicDetails";
import UsernameContext from "./context/UsernameContext";
import Username from "./components/Username";
import { useState } from "react";
import UserInfo from "./views/UserInfo";

function App() {
  const [username, setUsername] = useState("saisyam");
  const value = { username, setUsername }

  return (
    <UsernameContext.Provider value={value}>
      <NavBar></NavBar>
      <Container fluid style={{ "paddingTop": "10px" }}>
        <Username></Username>
        <BasicDetails></BasicDetails>
        <Row>
          <Col md={6}>
            <UserInfo></UserInfo>
          </Col>
        </Row>
      </Container>
    </UsernameContext.Provider>
  );
}

export default App;
