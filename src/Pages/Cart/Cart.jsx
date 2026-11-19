import "./Cart.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function Cart() {
  const [showDialog, setShowDialog] = useState(false);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || [],
  );
  const [selectedIndex, setSelectedIndex] = useState(null);
  const navigate = useNavigate();

  function openDialog(index) {
    setSelectedIndex(index);
    setShowDialog(true);
  }

  function closeDialog() {
    setShowDialog(false);
  }
  function confirmRemove() {
    const updatedCart = cartItems.filter((_, i) => i !== selectedIndex);

    setCartItems(updatedCart);

    localStorage.setItem("cartItems", JSON.stringify(updatedCart));

    setShowDialog(false);
  }

  return (
    <div className="cart-page">
      <ArrowLeft
        className="backarrow"
        size={20}
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/products")}
      />
      <h2>Your Cart</h2>
      <div className="cart-container">
        {cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item} alt="Cart Product" width="200" />

            <button onClick={() => openDialog(index)}>Remove Item</button>
          </div>
        ))}
      </div>

      {showDialog && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <h3>Are you sure?</h3>

            <p>Do you want to remove this item from your cart?</p>

            <div className="dialog-buttons">
              <button onClick={closeDialog}>Cancel</button>

              <button onClick={confirmRemove}>Yes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
