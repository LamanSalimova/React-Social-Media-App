import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";

export default function Stories() {
  const { currentUser } = useContext(AuthContext);

  const stories = [
    {
      id: 1,
      name: "Vlada",
      img: "https://images.pexels.com/photos/4873585/pexels-photo-4873585.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/17387766/pexels-photo-17387766/free-photo-of-adam-gunes-gozlugu-oturmak-masa.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Duygu ",
      img: "https://images.pexels.com/photos/15130309/pexels-photo-15130309/free-photo-of-kisi-kadin-sik-modaya-uygun.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
}
