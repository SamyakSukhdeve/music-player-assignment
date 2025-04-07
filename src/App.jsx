import Sidebar from "./components/sideBar/Sidebar";
import "./app.scss";
import Foryou from "./pages/forYou/Foryou";
import Player from "./components/player/Player";
import AppContext from "./context/AppContext";
import { useContext, useEffect, useRef } from "react";
import Fav from "./pages/fav/Fav";
import Recent from "./pages/recentlyPlayed/Recent";

function App() {
  const { activeTab, currentSong, setRecent, isPlaying, setCurrentSong } =
    useContext(AppContext);
  const audioRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      recentlyPlayed(currentSong);
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSong]);

  const onPlaying = () => {
    const duration = audioRef.current.duration;
    const currentTime = audioRef.current.currentTime;
    setCurrentSong({
      ...currentSong,
      progress: (currentTime / duration) * 100,
    });
  };

  const recentlyPlayed = (song) => {
    let recent = JSON.parse(sessionStorage.getItem("recentlyPlayed")) || [];
    recent = recent.filter((s) => s.title !== song.title);
    recent.unshift(song);

    if (recent.length > 10) {
      recent = recent.slice(0, 10);
    }
    sessionStorage.setItem("recentlyPlayed", JSON.stringify(recent));
    setRecent(recent);
  };

  return (
    <div className="app-body">
      <Sidebar>
        <div className="app-content">
          {activeTab === "foryou" ? <Foryou /> : null}
          {activeTab === "fav" ? <Fav /> : null}
          {activeTab === "recent" ? <Recent /> : null}
          <Player />
          <audio
            src={currentSong.musicUrl}
            ref={audioRef}
            onTimeUpdate={onPlaying}
          ></audio>
        </div>
      </Sidebar>
    </div>
  );
}

export default App;
