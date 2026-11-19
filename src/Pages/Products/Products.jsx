import hmImage from "../../assets/h&m.png";
import zaraImage from "../../assets/zara.png";
import aureliaImage from "../../assets/aur.png";
import zudioImage from "../../assets/zudio.png";
import bibaImage from "../../assets/biba.png";
import styleImage from "../../assets/style.png";
import "./Products.css";
import { useNavigate } from "react-router-dom";
function Products() {
  const navigate = useNavigate();
  return (
    <div className="cally">
      <h1>Our Products</h1>
      <div className="products-grid">
        <div className="product-card" onClick={() => navigate("/hmdetails")}>
          <img src={hmImage} alt="h&mimage" />
          <h3>H&M</h3>
          <p>Trendy fashion wear for every occasion.</p>
        </div>

        <div className="product-card" onClick={() => navigate("/zaradetails")}>
          <img src={zaraImage} alt="zaraimage" />
          <h3>Zara</h3>
          <p>Elegant and modern styles crafted for the fashion-forward.</p>
        </div>

        <div
          className="product-card"
          onClick={() => navigate("/aureliadetails")}
        >
          <img src={aureliaImage} alt="aureliaimage" />
          <h3>Aurelia</h3>
          <p>Ethnic wear collection blending comfort with tradition.</p>
        </div>

        <div className="product-card" onClick={() => navigate("/Zudio")}>
          <img src={zudioImage} alt="zudioimage" />
          <h3>Zudio</h3>
          <p>Affordable and stylish everyday fashion essentials.</p>
        </div>

        <div className="product-card" onClick={() => navigate("/Biba")}>
          <img src={bibaImage} alt="bibaimage" />
          <h3>Biba</h3>
          <p>Timeless ethnic wear with vibrant colors and prints.</p>
        </div>

        <div className="product-card" onClick={() => navigate("/Style Union")}>
          <img src={styleImage} alt="styleimage" />
          <h3>Style Union</h3>
          <p>Bold and unique fashion pieces that never blend in.</p>
        </div>
      </div>
    </div>
  );
}
export default Products;
