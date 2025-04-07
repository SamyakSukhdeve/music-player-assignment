import "./sidebar.scss";
import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";

const Sidebar = ({ children }) => {
  const { setActiveTab, activeTab } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const toggleonButtonClick = (name) => {
    setActiveTab(name);
    setIsOpen(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className="hamburger" onClick={toggleSidebar}>
        ☰
      </div>
      <div className={`sidebar-body ${isOpen ? "open" : ""}`}>
        <div>
          <img src="/src/assets/logo.svg" alt="logo" />
        </div>
        <div className="nav-list">
          <a onClick={() => toggleonButtonClick("foryou")}>
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
          <a onClick={() => toggleonButtonClick("fav")} className="nav-list">
            <div
              className="nav-item"
              style={activeTab === "fav" ? { color: "white" } : {}}
            >
              Favourites
            </div>
          </a>
          <a onClick={() => toggleonButtonClick("recent")} className="nav-list">
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
            src="/src/assets/images/avatar.jpg"
            alt="avatar"
          />
        </div>
      </div>
      <div className="children-container">{children}</div>
    </div>
  );
};

export default Sidebar;
