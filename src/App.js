import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import List from "./components/list";
import Cart from "./components/cart";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/react-redux-shoppingcart" element={<List/>}/>
        <Route path="/react-redux-shoppingcart/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
