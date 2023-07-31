import "./profile.scss";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { MdLanguage, MdEmail, MdLocationPin } from "react-icons/md";
import { FiMoreVertical } from "react-icons/fi";
import { BsPinterest } from "react-icons/bs";
import Posts from "../../components/posts/Posts";
import { useContext } from "react";
// import { AuthContext } from "../../context/authContext.jsx";

// const { currentUser } = useContext(AuthContext);

export default function Profile() {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/3509971/pexels-photo-3509971.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/4668523/pexels-photo-4668523.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="#">
              <BiLogoFacebook fontSize="large" />
            </a>
            <a href="#">
              <AiOutlineInstagram fontSize="large" />
            </a>
            <a href="#">
              <AiOutlineTwitter fontSize="large" />
            </a>
            <a href="#">
              <BiLogoLinkedin fontSize="large" />
            </a>
            <a href="#">
              <BsPinterest fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Jane Doe</span>
            <div className="info">
              <div className="item">
                <MdLocationPin />
                <span>USA</span>
              </div>
              <div className="item">
                <MdLanguage />
                <span>laman.dev</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <MdEmail />
            <FiMoreVertical />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
}
