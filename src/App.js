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
        <Route path="/" element={<List/>}/>
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
