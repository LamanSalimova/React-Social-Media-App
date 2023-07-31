import { Link } from "react-router-dom";
import "./post.scss";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import {
  BiDotsHorizontalRounded,
  BiCommentDetail,
  BiSolidShareAlt,
} from "react-icons/bi";
import { useState } from "react";
import Comments from "../comments/Comments";
import Share from "../share/Share";

export default function Post({ post }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(9);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const [commentOpen, setCommentOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <BiDotsHorizontalRounded />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {isLiked ? (
              <MdFavorite onClick={handleLike} fontSize="22px" />
            ) : (
              <MdOutlineFavoriteBorder onClick={handleLike} fontSize="22px" />
            )}
            {likeCount} Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <BiCommentDetail fontSize="22px" />
            12 Comments
          </div>
          <div className="item" onClick={() => setShareOpen(!shareOpen)}>
            <BiSolidShareAlt fontSize="22px" />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
        {shareOpen && <Share />}
      </div>
    </div>
  );
}
