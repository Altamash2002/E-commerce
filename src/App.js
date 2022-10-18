import Header from "./components/header";
import Home from "./pages/home";
import {Routes, Route} from "react-router-dom";
import Contact from "./pages/contact";
import Footer from "./components/footer";
import Login from "./pages/login";
import Register from "./pages/register";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import InsideLogin from "./pages/insideLogin";
import Success from "./pages/success";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login/profile" element={<InsideLogin />} />
      </Routes>
      <Footer />
    </>
  );                                                                               
}

export default App;
