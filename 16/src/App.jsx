import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarList from "./components/NavbarList";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { useState } from "react";
import Context from "./context/Context";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Login from "./pages/Login";
import AuthCxt from "./context/AuthContext";

function App() {
  const [showCart, setShowCart] = useState(false);
  const { isLoggedIn } = AuthCxt();
  return (
    <Context>
      <div className="App">
        {showCart && <Cart cart={setShowCart} />}
        <NavbarList cart={setShowCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route
            path="/store"
            element={isLoggedIn ? <Store /> : <Login />}
            exact
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store/:id" element={<Product />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <div className="header">The Generics</div>
        <div className="music">Music</div>
        <Products></Products>
        <Footer></Footer> */}
      </div>
    </Context>
  );
}
export default App;