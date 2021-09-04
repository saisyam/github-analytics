import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import BasicDetails from "./views/BasicDetails";
import UsernameContext from "./context/UsernameContext";
import Username from "./components/Username";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("saisyam");
  const value = {username, setUsername }

  return (
    <UsernameContext.Provider value={value}>
      <NavBar></NavBar>
      <Container fluid style={{ "padding": "10px" }}>
        <Username></Username>
        <BasicDetails></BasicDetails>
      </Container>
    </UsernameContext.Provider>
  );
}

export default App;
