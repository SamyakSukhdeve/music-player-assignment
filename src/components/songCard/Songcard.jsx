import "./songcard.scss";

const Songcard = ({ title, author, length, thumbnail }) => {
  return (
    <div className="card-body">
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
