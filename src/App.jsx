import Sidebar from "./components/sideBar/Sidebar";
import "./app.scss";
import Foryou from "./pages/forYou/Foryou";
import Player from "./components/player/Player";
import AppContext from "./context/AppContext";
import { useContext } from "react";
import Fav from "./pages/fav/Fav";

function App() {
  const { activeTab } = useContext(AppContext);

  return (
    <div className="app-body">
      <Sidebar />
      {activeTab === "foryou" ? <Foryou /> : null}
      {activeTab === "fav" ? <Fav /> : null}
      <Player />
    </div>
  );
}

export default App;
