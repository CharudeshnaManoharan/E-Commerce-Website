import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";
import fashionImage from "../../assets/fashions.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "1234") navigate("/home");
    else alert("Invalid email or password");
  };

  return (
    <div className="outer-card">
      <div className="left-wrapper">
      <div className="left-section">
        <img src={fashionImage} alt="Fashion" />
      </div>
      <h3 className="change">
        Shop the Trend. Own the Moment
      </h3>
      </div>

      <div className="divider"></div>

      <div className="inner-card">
        <p className="login-subtitle">
          Welcome back! Please login to continue.
        </p>
        <h1>TrendTrove</h1>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
        </div>
        <button onClick={handleLogin} className="color">
          Login
        </button>
      </div>
    </div>
  );
}
export default Login;
