import React, { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const ShoppingCartContext = createContext();

export default function MainLayout() {
  const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem("cartData")) || []);
  const [deletedData, setDeletedData] = useState([]);

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartData));
  }, [cartData]);

  const handleAddToCart = (selectedProduct) => {
    const productExists = cartData.some(
      (product) => product.id === selectedProduct.id
    );

    if (productExists) {
      const updatedCartData = cartData.map((product) =>
        product.id === selectedProduct.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      setCartData(updatedCartData);
    } else {
      setCartData((prevCartData) => [
        ...prevCartData,
        { ...selectedProduct, quantity: 1 },
      ]);
    }
  };

  const removeProductFromCart = (id) => {
    const productToRemove = cartData.find((product) => product.id === id);
    setDeletedData((prevDeletedData) => [...prevDeletedData, productToRemove]);
    setCartData((prevCartData) => prevCartData.filter((product) => product.id !== id));
  };

  const totalPrice = cartData.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <ShoppingCartContext.Provider value={{ cartData, setCartData, handleAddToCart, removeProductFromCart, deletedData, setDeletedData, totalPrice }}>
      <Header />
      <Outlet />
      <Footer />
    </ShoppingCartContext.Provider>
  );
}
