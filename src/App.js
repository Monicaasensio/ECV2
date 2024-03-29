import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Products from './Pages/products';
import Cart from './Pages/cart';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import banner from './Components/Assets/header-logo3.png';
import { CartContextProvider } from './Context/CartContext.jsx';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
          <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/products" element={<Products banner={banner} />}/>
      <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer />
      </div>
</BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
