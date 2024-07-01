import React, { useContext } from "react";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import '../css/Nav1.css'
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import Offcanvas from "./Offcanvas";
import { ShoppingCartContext } from "../layouts/MainLayout";

export default function Header() {
  return (
    <header>
      <nav className="main-nav">
        <div className=" container-css">
          <ul className="nav-1">
            <li>
              <Link to="https://www.instagram.com">
                <BsInstagram />
              </Link>
            </li>
            <li>|</li>
            <li className="contact-us-text">Biz bilan bog'laning</li>
            <li>|</li>
            <li>+998 99 902 01 29</li>
            <li>|</li>
            <li>
              <select className="form-select select-nav1" ariaLabel="Default select example">
                <option value='uzb' selected>Uzbek</option>
                <option value="rus">Russion</option>
                <option value="eng">English</option>
              </select>
            </li>
          </ul>
        </div>
      </nav>
      <nav>
        <div className="container-css py-2 d-flex justify-content-between align-items-center">
          <Link to='/'>
            <img style={{ width: '225px', height: '50px' }} src="https://brostore.uz/cdn/shop/files/Bro_81acb51b-de0c-413d-b7bc-ebea9a5e07fe.png?v=1701779683" alt="bro png" />
          </Link>

          <ul className=" d-flex gap-4">
            <Link to='/'>
              Home
            </Link>
            <Link to='/store'>
              Store
            </Link>
            <Link to='/blog'>
              Blog
            </Link>
            <Link to='/contact'>
              Contact
            </Link>
          </ul>

          <div className="d-flex align-items-center gap-2">
            <Link to="/search">
              <IoSearch className=" fs-4" />
            </Link>
            <Link to='/login'>

              <FaRegUser className=" fs-5" />
            </Link>
            <div style={{ position: 'relative', top: '-4px' }}>
              <Offcanvas />
            </div>
          </div>

          {/* <div className="d-flex gap-3">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div> */}
        </div>
      </nav>
    </header>
  );
}
