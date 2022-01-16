import "./App.css";
import { products as prod, items as itm } from "./products";

function App() {
  return (
    <div className="App">
      <h1> Hello World to Board Games</h1>
      <p>site for buying and selling Board Games!</p>
      <img
        alt="Board Game logo"
        src="https://cf.geekdo-static.com/images/logos/navbar-logo-bgg-b2.svg"
      />
      <h1> {prod[0].name}</h1>
      <h2>{prod[0].price}</h2>
      <img src={prod[0].image} />
      <h1> {prod[1].name}</h1>
      <h2>{prod[1].price}</h2>
      <img src={prod[1].image} />
    </div>
  );
}

export default App;
