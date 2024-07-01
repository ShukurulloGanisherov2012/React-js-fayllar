import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainLayout from "./layouts/MainLayout";
import MainPage from "./pages/MainPage";
import Store from "./pages/Store";
import ProductDetail from "./pages/ProductDetail";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Offcanvas from "./components/Offcanvas";
import DeletedCarts from "./components/cart/DeletedCarts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={
              <div className="d-flex flex-column justify-content-center align-items-center vh-100 not-found-bg">
              <div className="text-center text-white">
                <h1 className="display-1">404</h1>
                <p className="lead">Sorry, the page you are looking for cannot be found!</p>
                <a href="/" className="btn btn-outline-light mt-3">Go Home</a>
              </div>
            </div>
            } />
            <Route path="/store" element={<Store />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/deletedcarts" element={<DeletedCarts  />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
