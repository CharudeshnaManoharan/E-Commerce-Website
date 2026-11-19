import "./Hmdetails.css";
import { useNavigate } from "react-router-dom";
import hm1Image from "../../../assets/hm.png";
import hm2Image from "../../../assets/hm2.png";
import hm3Image from "../../../assets/hm3.png";
import { ArrowLeft } from "lucide-react";
function HMDetails() {
  const navigate = useNavigate();
  const addToCart = (image) => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];

    existingCart.push(image);

    localStorage.setItem("cartItems", JSON.stringify(existingCart));

    navigate("/cart");
  };
  return (
    <div className="hm-wrapper">
      <ArrowLeft
        className="arrow"
        size={20}
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/products")}
      />
      <h1>H&M, Welcomes You..</h1>

      <div className="hm">
        <div className="hm-item">
          <img src={hm1Image} alt="hm" />
          <button className="buybutton" onClick={() => navigate("/checkout1")}>
            Buy Now
          </button>
          <button className="cartbutton" onClick={() => addToCart(hm1Image)}>
            Add to Cart
          </button>
        </div>

        <div className="hm-item">
          <img src={hm2Image} alt="hm2" />
          <button className="buybutton" onClick={() => navigate("/checkout2")}>
            Buy Now
          </button>
          <button className="cartbutton" onClick={() => addToCart(hm2Image)}>
            Add to Cart
          </button>
        </div>

        <div className="hm-item">
          <img src={hm3Image} alt="hm3" />
          <button className="buybutton" onClick={() => navigate("/checkout3")}>
            Buy Now
          </button>
          <button className="cartbutton" onClick={() => addToCart(hm3Image)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default HMDetails;
