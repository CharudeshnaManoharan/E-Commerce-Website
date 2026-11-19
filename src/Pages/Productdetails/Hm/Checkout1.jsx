import "./Checkout1.css";
import hmImage from "../../../assets/hm.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
function Checkout1() {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [newAddress, setNewAddress] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  function increaseQty() {
    setQuantity(quantity + 1);
  }
  function decreaseQty() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  function handleOrderPlaced() {
    if (!address) {
      alert("Please add a delivery address before placing the order.");
      return;
    }
    const existingOrders = JSON.parse(localStorage.getItem("orderItems")) || [];

    const newOrder = {
      image: hmImage,
      productName: "MAXI",
      size: "S",
      price: 1499,
      quantity: quantity,
      address: address,
    };

    const updatedOrders = [...existingOrders, newOrder];

    localStorage.setItem("orderItems", JSON.stringify(updatedOrders));
    setOrderPlaced(true);
  }
  if (orderPlaced) {
    return (
      <div className="order-success">
        <h2>✅ Order Placed Successfully!</h2>
        <p>Your order for MAXI (Qty: {quantity}) will be delivered to:</p>
        <p>
          <strong>{address}</strong>
        </p>
        <button
          className="place-order-btn"
          onClick={() => navigate("/products")}
        >
          Continue Shopping
        </button>
      </div>
    );
  }
  return (
    <div className="checkout-page1">
      <ArrowLeft
        size={20}
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/HMDetails")} // send them wherever makes sense
      />
      <h2>Order Summary</h2>

      <div className="order-item">
        <img src={hmImage} alt="hm" />
        <div className="order-info">
          <h3>MAXI</h3>
          <p>Size: S</p>
          <p>Price: &#8377;1,499</p>
        </div>
      </div>

      <div className="quantity-section">
        <label>Quantity:</label>
        <button onClick={decreaseQty}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQty}>+</button>
      </div>

      <div className="address-section">
        <h3>Delivery Address</h3>
        <p>{address}</p>
        <button onClick={() => setIsEditing(true)}>Change Address</button>

        {isEditing && (
          <div className="address-input-group">
            <input
              type="text"
              placeholder="Enter new address"
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
              className="address-input"
            />

            <button
              className="save-btn-add"
              onClick={() => {
                setAddress(newAddress);
                setIsEditing(false);
                setNewAddress("");
              }}
            >
              Save Address
            </button>
          </div>
        )}
      </div>

      <div className="price-details">
        <h3>Price Details</h3>
        <p>Item Total: &#8377;1,499</p>
        <p>Delivery: &#8377;40</p>
        <p>Total: &#8377;1,539</p>
      </div>

      <div className="payment-section">
        <h3>Payment Method</h3>
        <label>
          <input type="radio" name="payment" />
          UPI
        </label>
        <label>
          <input type="radio" name="payment" />
          Credit/Debit Card
        </label>
        <label>
          <input type="radio" name="payment" />
          Cash on Delivery
        </label>
      </div>

      <button className="place-order-btn" onClick={handleOrderPlaced}>
        Place Order
      </button>
    </div>
  );
}
export default Checkout1;
