import Post from "../post/Post";
import "./posts.scss";

export default function Posts() {
  const posts = [
    {
      id: 1,
      name: "Oliver Subiyanto",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/2691608/pexels-photo-2691608.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://media.istockphoto.com/id/904172104/photo/weve-made-it-all-this-way-i-am-proud.jpg?b=1&s=612x612&w=0&k=20&c=JRmndTMyz627jxKiUjgXSJXrxwuAiHkHjefiRsyY2jc=",
    },
    {
      id: 2,
      name: "Elle Hughes",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
      img: "https://images.pexels.com/photos/3204296/pexels-photo-3204296.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Kaan Keskin",
      userId: 3,
      profilePic:
        "https://images.pexels.com/photos/1456951/pexels-photo-1456951.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
      img: "https://images.pexels.com/photos/13838319/pexels-photo-13838319.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Christian All",
      userId: 4,
      profilePic:
        "https://images.pexels.com/photos/2923157/pexels-photo-2923157.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
      img: "https://images.pexels.com/photos/2923157/pexels-photo-2923157.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}
