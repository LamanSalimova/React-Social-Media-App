import { Link } from "react-router-dom";
import "./navbar.scss";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { MdOutlineDarkMode } from "react-icons/md";
import { FiGrid, FiSun } from "react-icons/fi";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

export default function Navbar() {
  const { darkMode, toggle } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          lmnSocial
        </Link>
        <AiOutlineHome className="icon" />
        {darkMode ? (
          <FiSun onClick={toggle} className="icon" />
        ) : (
          <MdOutlineDarkMode onClick={toggle} className="icon" />
        )}
        <FiGrid className="icon" />
        <div className="search">
          <BiSearchAlt2 className="icon" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <BsFillPersonFill className="icon" />
        <AiOutlineMail className="icon" />
        <IoMdNotificationsOutline className="icon" />
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <div className="user">
            <img src={currentUser.profilePic} alt="user" />
            <span>{currentUser.username}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
