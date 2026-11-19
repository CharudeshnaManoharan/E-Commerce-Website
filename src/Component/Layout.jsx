import { Outlet, useLocation, Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./Layout.css";
import profileImage from "../assets/profile.png";
import { useState } from "react";
function Layout() {
  const [showMenu, setShowMenu] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
  }
  let pageName = "";

  if (location.pathname === "/home") {
    pageName = "Home";
  } else if (location.pathname === "/products") {
    pageName = "Products";
  } else if (location.pathname === "/cart") {
    pageName = "Cart";
  } else if (location.pathname === "/wishlist") {
    pageName = "Wishlist";
  } else if (location.pathname === "/orders") {
    pageName = "Orders";
  } else if (location.pathname === "/profile") {
    pageName = "Profile";
  } else if (location.pathname === "/settings") {
    pageName = "Settings";
  } else if (location.pathname === "/hmdetails") {
    pageName = "H&M";
  } else if (location.pathname === "/zaradetails") {
    pageName = "Zara";
  } else if (location.pathname === "/aureliadetails") {
    pageName ="Aurelia";
  } else if (location.pathname === "/checkout1") {
    pageName = "H&M";
  }
  else if (location.pathname === "/dashboard"){
    pageName = "Dashboard";
  }

  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <header className="page-header">
          <h2>{pageName}</h2>

          <div className="profile-menu">
            <button
              className="profile-button"
              onClick={() => setShowMenu(!showMenu)}
            >
              <img src={profileImage} alt="Profile" />
            </button>

            {showMenu && (
              <div className="dropdown-menu">
                <nav>
                  <Link to="/profile">Profile</Link>
                  <Link to="/settings">Settings</Link>
                  <p onClick={handleLogout}>Logout</p>
                </nav>
              </div>
            )}
          </div>
        </header>
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default Layout;
