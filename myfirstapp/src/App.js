//we installed react bootstrap using npm command
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <button>a button</button>
      <Button>a bootstrap button</Button>
      <h1>Hello from react compnent</h1>
      <p>lorem</p>
    </div>
  );
}

export default App;
