import React, { useContext } from "react";
import { ShoppingCartContext } from "../../layouts/MainLayout";

export default function DeletedCarts() {
  const { deletedData, handleAddToCart, setDeletedData } = useContext(ShoppingCartContext);

  const restoreProduct = (product) => {
    handleAddToCart(product);
    setDeletedData((prevDeletedData) =>
      prevDeletedData.filter((item) => item.id !== product.id)
    );
  };

  return (
    <div className="container mt-5">
      {deletedData.map((product) => (
        <div key={product.id} className="mb-3 border">
          <div className="d-flex mb-3 align-items-center">
            <img
              src={product.images[0]}
              alt={product.title}
              style={{ width: "124px", height: "80px" }}
              className="me-3"
            />
            <div className="w-100 d-flex justify-content-between">
              <div>
                <h5>{product.title}</h5>
                <p>${product.price.toFixed(2)}</p>
              </div>
              <div>
                <button
                  className="btn btn-outline-success"
                  onClick={() => restoreProduct(product)}
                >
                  Restore
                </button>
                <h6 className="mt-2">${(product.price * product.quantity).toFixed(2)}</h6>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <span>Quantity: {product.quantity}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
