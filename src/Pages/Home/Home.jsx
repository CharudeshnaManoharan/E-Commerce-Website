import "./Home.css";
import homeImage from "../../assets/bghome.png";
function Home(){
    
    return(
        <div className="call">
            <h1>Welcome to TrendTrove!</h1>
            <div className="home-row">
            <img src={homeImage} alt="homeImage"/>
            <p>Welcome to TrendTrove! Here you can explore our latest products and enjoy a wonderful shopping experience.
                We provide quality products at affordable prices.
            </p>
            </div>

        </div>
    );
}
export default Home;