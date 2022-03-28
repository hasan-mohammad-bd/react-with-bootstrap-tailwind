import logo from "./logo.svg";
import "./App.css";
import { Spinner } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default App;
