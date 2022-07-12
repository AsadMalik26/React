//we installed react bootstrap using npm command
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./components/Product";

function App() {
  const handleOnAddToCart = (title, price) => {
    alert("Handle add to cart clicked for " + title + " for " + price);
  };
  return (
    <div className="Asad App">
      <h1 style={{ backgroundColor: "aqua" }}>Compnents Example</h1>
      <Product title="My Product" price="500" onAddToCart={handleOnAddToCart} />
      <Product title="My Product" price="400" onAddToCart={handleOnAddToCart} />
      <Product title="My Product" price="500" onAddToCart={handleOnAddToCart} />
    </div>
  );
}

export default App;
