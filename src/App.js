import "./App.css";
import { products as prod, items as itm } from "./products";
import ProductItem from "./components/ProductItem";
import ProductList from "./components/ProductList";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <ProductList prods={prod} />
    </div>
  );
}

export default App;
