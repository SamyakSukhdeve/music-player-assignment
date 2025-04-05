import "./sidebar.scss";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

const Sidebar = () => {
  const { setActiveTab, activeTab } = useContext(AppContext);

  return (
    <div className="body">
      <div>
        <img src="/src/assets/logo.svg" alt="logo" />
      </div>
      <div>
        <a onClick={() => setActiveTab("foryou")} className="nav-list">
          <div
            className="nav-item"
            style={activeTab === "foryou" ? { color: "white" } : {}}
          >
            For You
          </div>
        </a>
        <a className="nav-list">
          <div className="nav-item">Top Tracks</div>
        </a>
        <a onClick={() => setActiveTab("fav")} className="nav-list">
          <div
            className="nav-item"
            style={activeTab === "fav" ? { color: "white" } : {}}
          >
            Favourites
          </div>
        </a>
        <a onClick={() => setActiveTab("recent")} className="nav-list">
          <div
            className="nav-item"
            style={activeTab === "recent" ? { color: "white" } : {}}
          >
            Recently Played
          </div>
        </a>
      </div>
      <div className="avatar">
        <img
          className="avatar-img"
          src="/src/assets/images/avatar.png"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Sidebar;
