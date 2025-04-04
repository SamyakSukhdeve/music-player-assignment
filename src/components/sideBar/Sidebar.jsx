import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="body">
      <div>
        <img src="/src/assets/logo.svg" alt="logo" />
      </div>
      <div>
        <a className="nav-list">
          <div className="nav-item">For You</div>
        </a>
        <a className="nav-list">
          <div className="nav-item">Top Tracks</div>
        </a>
        <a className="nav-list">
          <div className="nav-item">Favourites</div>
        </a>
        <a className="nav-list">
          <div className="nav-item">Recently Played</div>
        </a>
      </div>
      <div className="avatar">
        <img className="avatar-img" src="/src/assets/images/avatar.png" alt="avatar" />
      </div>
    </div>
  );
};

export default Sidebar;
