//we installed react bootstrap using npm command
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./components/Product";
import Counter from "./components/counter";
import React from "react";

function App() {
  const handleOnAddToCart = (title, price) => {
    alert(
      "State lifted up - Handle add to cart clicked for " +
        title +
        " for " +
        price
    );
  };
  const [count, setCount] = React.useState(7);
  const handleIncreament = () => {
    setCount(count + 1);
  };
  const handleDecreament = () => {
    setCount(count - 1);
  };

  return (
    <div className="Asad App">
      <h1 style={{ backgroundColor: "aqua" }}>Compnents Example</h1>
      {/* counter still use handleIncreament and dercreament even they are not passed as props with <Counter/> */}
      <Counter
        count={count}
        handleDecreament={handleDecreament}
        handleIncreament={handleIncreament}
      />
      <Product title="Civic" price="500" onAddToCart={handleOnAddToCart} />
      <Product title="Toyaota" price="400" onAddToCart={handleOnAddToCart} />
      <Product title="Swift" price="500" onAddToCart={handleOnAddToCart} />
    </div>
  );
}

export default App;
