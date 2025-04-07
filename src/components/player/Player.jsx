import { Heart, Volume2 } from "lucide-react";
import "./player.scss";
import { Line } from "rc-progress";
import { useContext, useEffect } from "react";
import AppContext from "../../context/AppContext";
import { Vibrant } from "node-vibrant/browser";
import prev from "/assets/prev.svg";
import play from "/assets/play.svg";
import pause from "/assets/pause.svg";
import next from "/assets/next.svg";

const Player = () => {
  const {
    setIsPlaying,
    isPlaying,
    currentSong,
    prevSong,
    nextSong,
    setFav,
    fav,
  } = useContext(AppContext);

  useEffect(() => {
    Vibrant.from(currentSong.thumbnail)
      .getPalette()
      .then(
        (palette) =>
          (document.body.style.background = `linear-gradient(to right, ${palette.DarkMuted.hex}, ${palette.DarkVibrant.hex})`)
      );
  }, [currentSong]);

  const addToFav = () => {
    const songToAdd = currentSong;
    const currentFav = fav;

    if (
      currentFav.some(
        (favouriteSong) => favouriteSong.title === songToAdd.title
      )
    ) {
      console.log("Song already in favourites");
      return;
    }
    const updatedFav = [...currentFav, songToAdd];
    localStorage.setItem("favourites", JSON.stringify(updatedFav));
    setFav(updatedFav);
  };

  return (
    <div className="player-body">
      <div>
        {" "}
        <div className="song-name">{currentSong.title}</div>
        <div className="song-artist">{currentSong.artistName}</div>
      </div>

      <div className="song-thumbnail">
        <img className="thumbnail-img" src={currentSong.thumbnail} alt="" />
      </div>
      <div>
        <Line
          percent={currentSong.progress}
          strokeColor="#FFFFFF"
          strokeWidth={1.5}
          trailWidth={1.5}
          trailColor="#2C2C2C"
          className="styled-progress-bar"
        />
      </div>
      <div className="media-controles">
        <div className="three-dots">
          <Heart
            height={24}
            width={24}
            style={fav.includes(currentSong) ? { color: "red" } : null}
            onClick={addToFav}
          />
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <img
            src={prev}
            style={{ cursor: "pointer" }}
            onClick={() => prevSong()}
            alt="prev"
          />
          <div
            className="play-pause-button"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            <img src={isPlaying ? pause : play} style={{ cursor: "pointer" }} />
          </div>

          <img
            src={next}
            onClick={() => nextSong()}
            style={{ cursor: "pointer" }}
            alt="next"
          />
        </div>
        <div className="volume-button">
          <Volume2 />
        </div>
      </div>
    </div>
  );
};

export default Player;
