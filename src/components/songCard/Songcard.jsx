import "./songcard.scss";

const Songcard = () => {
  return (
    <div className="card-body">
      <div className="card-left">
        <div className="song-avatar">
          <img
            className="song-avatar-img"
            src="src/assets/images/avatar.png"
            alt=""
          />
        </div>
        <div>
          <div className="song-title">Father Ocen</div>
          <div className="song-author">Samyak Sukhdeve</div>
        </div>
      </div>
      <div className="song-length">4:16</div>
    </div>
  );
};

export default Songcard;
