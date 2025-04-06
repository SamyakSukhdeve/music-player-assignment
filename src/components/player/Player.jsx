import { Ellipsis, Heart, Pause, Volume2 } from "lucide-react";
import "./player.scss";
import { Line } from "rc-progress";
import { useContext, useEffect } from "react";
import AppContext from "../../context/AppContext";
import { Vibrant } from "node-vibrant/browser";

const Player = () => {
  const {
    setIsPlaying,
    isPlaying,
    currentSong,
    prevSong,
    nextSong,
    setFav,
    fav,
    setRecent,
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
            src="/src/assets/prev.svg"
            style={{ cursor: "pointer" }}
            onClick={() => prevSong()}
            alt="prev"
          />
          <div
            className="play-pause-button"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            <img
              src={isPlaying ? "/src/assets/pause.svg" : "/src/assets/play.svg"}
              style={{ cursor: "pointer" }}
            />
          </div>

          <img
            src="/src/assets/next.svg"
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
