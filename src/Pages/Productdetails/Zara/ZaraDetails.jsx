import "./Zara.css";
import zara1Image from "../../../assets/ZARA1.PNG";
import zara2Image from "../../../assets/ZARA2.PNG";
import zara3Image from "../../../assets/ZARA3.PNG";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
function ZaraDetails() {
  const navigate = useNavigate();
  const addToCart = (image) => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    existingCart.push(image);
    localStorage.setItem("cartItems", JSON.stringify(existingCart));
    navigate("/cart");
  };
  return (
    <div className="zara-wrapper">
      <ArrowLeft
        className="arrow"
        size={20}
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/products")}
      />
      <h1>Zara, Welcomes You..</h1>

      <div className="zara">
        <div className="zara-item">
          <img src={zara1Image} alt="zara" />
          <button className="buybutton" onClick={() => navigate("/zarac1")}>
            Buy Now
          </button>
          <button className="cartb" onClick={() => addToCart(zara1Image)}>
            Add to Cart
          </button>
        </div>

        <div className="zara-item">
          <img src={zara2Image} alt="zara2" />
          <button className="buybutton" onClick={() => navigate("/zarac2")}>
            Buy Now
          </button>
          <button className="cartb" onClick={() => addToCart(zara2Image)}>
            Add to Cart
          </button>
        </div>

        <div className="zara-item">
          <img src={zara3Image} alt="zara3" />
          <button className="buybutton" onClick={() => navigate("/zarac3")}>
            Buy Now
          </button>
          <button className="cartb" onClick={() => addToCart(zara3Image)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default ZaraDetails;
