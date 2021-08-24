import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import BasicDetails from "./views/BasicDetails";

function App() {
  return (
    <>
    <NavBar></NavBar>
    <Container fluid style={{"padding":"10px"}}>  
      <BasicDetails></BasicDetails>
    </Container>
    </>
  );
}

export default App;
