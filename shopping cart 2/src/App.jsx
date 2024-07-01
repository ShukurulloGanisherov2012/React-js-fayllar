import React, { useState, useEffect } from 'react';
import './App.css';
import { FaChevronLeft, FaChevronRight, FaShoppingCart, FaTrashAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa6";

const App = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [number, setNumber] = useState(1);
  const [selectedCard, setSelectedCard] = useState([]);

  const images = [
    "/Rectangle.png",
    "/Rectangle2.png",
    "/Rectangle3.png",
    "/Rectangle4.png"
  ];

  // Load cart data from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setSelectedCard(JSON.parse(savedCart));
    }
  }, []);

  // Save cart data to localStorage whenever selectedCard changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(selectedCard));
  }, [selectedCard]);

  const handleDelete = (index) => {
    const newSelectedCard = [...selectedCard];
    newSelectedCard.splice(index, 1);
    setSelectedCard(newSelectedCard);
  };

  const goToPrevImage = () => {
    setActiveImage(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNextImage = () => {
    setActiveImage(prev => (prev + 1) % images.length);
  };

  const handleIncrement = () => {
    setNumber(prev => prev + 1);
  };

  const handleDecrement = () => {
    setNumber(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handlePushCard = () => {
    const price = 125 * number;
    const findCard = selectedCard.findIndex(item => item.img === images[activeImage]);

    if (findCard !== -1) {
      const updatedSelectedCard = [...selectedCard];
      updatedSelectedCard[findCard].price = price;
      setSelectedCard(updatedSelectedCard);
    } else {
      const newSelectedCard = {
        img: images[activeImage],
        title: 'Lorem ipsum consectetur adipisicing.',
        price: price
      };
      setSelectedCard(prev => [...prev, newSelectedCard]);
      setNews(prev => prev + 1);
    }
    setNumber(1); // Reset quantity after adding to cart
  };

  const handleChangeBlock = () => {
    if (window.innerWidth > 1200) {
      document.querySelector('.Change').style.display = 'block';
      document.body.style.backgroundColor = 'black';
      document.querySelector('header').style.opacity = '0.3';
      document.querySelector('.cart').style.opacity = '0.3';
      document.querySelector('.product-details').style.opacity = '0.3';
      document.querySelector('.product-page').style.opacity = '0.3';
      document.querySelector('.product-page').style.backgroundColor = 'white';
    }
    else{
      document.querySelector('.Change').style.display = 'none';
      document.body.style.backgroundColor = 'white';
      document.querySelector('header').style.opacity = '1';
      document.querySelector('.cart').style.opacity = '1';
      document.querySelector('.product-details').style.opacity = '1';
      document.querySelector('.product-page').style.opacity = '1';
      document.querySelector('.product-page').style.backgroundColor = 'white';
    }
  }

  const handleChangeNone = () => {
    document.querySelector('.Change').style.display = 'none';
    document.body.style.backgroundColor = 'white';
    document.querySelector('header').style.opacity = '1';
    document.querySelector('.cart').style.opacity = '1';
    document.querySelector('.product-details').style.opacity = '1';
    document.querySelector('.product-page').style.opacity = '1';
    document.querySelector('.product-page').style.backgroundColor = 'white';
  }
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <div className="main-navbar">
            <div className="ofcanvasNone">
              <div class="offcanvas offcanvas-start" id="demo">

                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                <div className="nav-links">
                  <a href="#">Collections</a>
                  <a href="#">Men</a>
                  <a href="#">Women</a>
                  <a href="#">About</a>
                  <a href="#">Contact</a>
                </div>
              </div>

              <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
                <FaBars />
              </button>
            </div>
            <div className="logo">sneakers</div>
            <div className="nav-links">
              <a href="#">Collections</a>
              <a href="#">Men</a>
              <a href="#">Women</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div className="user-cart">
            <div className="cart-icon">
              <button style={{ position: 'relative' }} onClick={() => document.querySelector('.cart').style.display = 'block'}>
                <FaShoppingCart size={30} />
              </button>
              {
                selectedCard.length > 0 && (
                  <div className="new">
                    {selectedCard.length}
                  </div>
                )
              }
            </div>
            <img src="Oval.png" alt="" className="user-icon" />
          </div>
          <div style={{ position: 'absolute', top: '60px', right: '30px', display: 'none' }} className="cart">
            <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', gap: '300px' }}>
              <h2>Cart</h2>
              <button className='close' onClick={() => document.querySelector('.cart').style.display = 'none'}><IoMdClose /></button>
            </div>
            <div className="cartsWrapper">
              {selectedCard.length === 0 ? (
                <p>Your Cart is empty</p>
              ) : (
                selectedCard.map((item, index) => (
                  <div key={index} className="simple-card">
                    <img className='simple-card-img' src={item.img} alt="Sneaker" />
                    <p>{item.title}</p>
                    <span>${item.price.toFixed(2)}</span>
                    <button className='trash' onClick={() => handleDelete(index)}><FaTrashAlt /></button>
                  </div>
                ))
              )}
            </div>
          </div>
        </nav>
      </header>
      <main className='Change'>
        <button className='close' style={{ position: 'absolute', top: '-30px', right: '-40px', zIndex: '5' }} onClick={handleChangeNone}><IoMdClose /></button>
        <div className="product-images">
          <div className="main-image-container">
            <button className='left' onClick={goToPrevImage}><FaChevronLeft /></button>
            <img src={images[activeImage]} alt="Main Sneaker" className="main-image" />
            <button className='right' onClick={goToNextImage}><FaChevronRight /></button>
          </div>
          <div className="thumbnail-images">
            {images.map((img, index) => (
              <img
                key={index}
                className={`recs ${activeImage === index ? 'active' : ''}`}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setActiveImage(index)}
              />
            ))}
          </div>
        </div>
      </main>
      <main className="product-page">
        <div className="product-images">
          <div className="main-image-container">
            <button className='left' onClick={goToPrevImage}><FaChevronLeft /></button>
            <img onClick={handleChangeBlock} src={images[activeImage]} alt="Main Sneaker" className="main-image" />
            <button className='right' onClick={goToNextImage}><FaChevronRight /></button>
          </div>
          <div className="thumbnail-images">
            {images.map((img, index) => (
              <img
                key={index}
                className={`recs ${activeImage === index ? 'active' : ''}`}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setActiveImage(index)}
              />
            ))}
          </div>
        </div>
        <div className="product-details">
          <h2>SNEAKER COMPANY</h2>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
          <div className="price">
            <div>
              <span className="current-price">$125.00</span>
              <span className="discount">50%</span>
            </div>
            <span className="original-price">$250.00</span>
          </div>
          <div className="quantity">
            <button onClick={handleDecrement}>-</button>
            <span>{number}</span>
            <button onClick={handleIncrement}>+</button>
          </div>
          <button className="add-to-cart d-flex align-items-center" onClick={handlePushCard}><FaShoppingCart /> Add to cart</button>
        </div>
      </main>
    </div>
  );
};

export default App;
