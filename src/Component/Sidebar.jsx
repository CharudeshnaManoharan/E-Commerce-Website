import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { FaBoxOpen } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { GiAmpleDress } from "react-icons/gi";







import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="helloy"><GiAmpleDress color="brown" />TrendTrove</h2>
      <nav>
        <Link to="/home"><IoHome color="brown"/>Home</Link>
        <Link to="/products"><FaBagShopping color="brown"/>Products</Link>
        <Link to="/cart"><IoMdCart color="brown"/>Cart</Link>
        <Link to="/wishlist"><BsBookmarkHeartFill color="brown"></BsBookmarkHeartFill>Wishlist</Link>
        <Link to="/orders"><FaBoxOpen color="Brown"/>Orders</Link>
        <Link to="/dashboard"><LuLayoutDashboard color="brown"/>Dashboard</Link>
      </nav>
    </div>
  );
}
export default Sidebar;
