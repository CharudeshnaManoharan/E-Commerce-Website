import "./Aure.css";
import A1Image from "../../../assets/AURE1.PNG";
import A2Image from "../../../assets/AURE2.PNG";
import A3Image from "../../../assets/AURE.PNG";
function AureliaDetails() {
  return (
    <div className="aure-wrapper">
      <h1>Aurelia, Welcomes You..</h1>

      <div className="aure">
        <div className="aure-item">
          <img src={A1Image} alt="aure" />
          <button className="buybutton">Buy Now</button>
        </div>

        <div className="aure-item">
          <img src={A2Image} alt="aure2" />
          <button className="buybutton">Buy Now</button>
        </div>

        <div className="aure-item">
          <img src={A3Image} alt="aure3" />
          <button className="buybutton">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
export default AureliaDetails;
