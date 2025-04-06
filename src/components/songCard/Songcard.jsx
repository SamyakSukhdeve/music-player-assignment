import { useContext } from "react";
import "./songcard.scss";
import AppContext from "../../context/AppContext";

const Songcard = ({ title, author, length, thumbnail, onClick }) => {
  const { currentSong } = useContext(AppContext);
  return (
    <div
      className="card-body"
      onClick={onClick}
      style={currentSong.title === title ? { background: "#ffffff14" } : null}
    >
      <div className="card-left">
        <div className="song-avatar">
          <img className="song-avatar-img" src={thumbnail} />
        </div>
        <div>
          <div className="song-title">{title}</div>
          <div className="song-author">{author}</div>
        </div>
      </div>
      <div className="song-length">{length}</div>
    </div>
  );
};

export default Songcard;
