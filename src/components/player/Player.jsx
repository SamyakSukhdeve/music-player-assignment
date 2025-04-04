import { Ellipsis, Pause, Volume2 } from "lucide-react";
import "./player.scss";
import { Line } from "rc-progress";

const Player = () => {
  return (
    <div className="player-body">
      <div>
        {" "}
        <div className="song-name">Father Ocean</div>
        <div className="song-artist">Samyak</div>
      </div>

      <div className="song-thumbnail">
        <img
          className="thumbnail-img"
          src="/src/assets/images/songimage.jpeg"
          alt=""
        />
      </div>
      <div>
        <Line
          percent={20}
          strokeColor="#FFFFFF"
          strokeWidth={1.5}
          trailWidth={1.5}
          trailColor="#2C2C2C"
        />
      </div>
      <div className="media-controles">
        <div className="three-dots">
          <Ellipsis height={24} width={24} />
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <img src="/src/assets/prev.svg" alt="prev" />
          <div className="play-pause-button">
            <Pause color="#030303" />
          </div>
          <img src="/src/assets/next.svg" alt="next" />
        </div>
        <div className="volume-button">
          <Volume2 />
        </div>
      </div>
    </div>
  );
};

export default Player;
