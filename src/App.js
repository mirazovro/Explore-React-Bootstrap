import logo from "./logo.svg";
import "./App.css";
import { Button, Spinner } from "react-bootstrap";
import GridCard from "./Components/GridCard/GridCard";
import Navbar1 from "./Components/NavBar/Navbar1";
import Toast1 from "./Components/Toast/Toast1";

function App() {
  return (
    <div className="App">
      <Button variant="danger">My button</Button> <br />
      <Spinner animation="border" variant="secondary" />
      <GridCard></GridCard>
      <Navbar1></Navbar1>
      <Toast1></Toast1>
    </div>
  );
}

export default App;
