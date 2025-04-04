import Sidebar from "./components/sideBar/Sidebar";
import "./app.scss";
import Foryou from "./pages/forYou/Foryou";
import Player from "./components/player/Player";
function App() {
  return (
    <div className="app-body">
      <Sidebar />
      <Foryou />
      <Player />
    </div>
  );
}

export default App;
