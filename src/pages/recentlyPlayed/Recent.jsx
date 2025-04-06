import Songcard from "../../components/songCard/Songcard";
import AppContext from "../../context/AppContext";
import "./recent.scss";

import React, { useContext } from "react";

const Recent = () => {
  const { recent } = useContext(AppContext);
  return (
    <div className="recent-body">
      <div className="recent-title">Recently Played</div>
      {recent.map((d, i) => (
        <Songcard
          title={d.title}
          key={i}
          author={d.artistName}
          length={d.duration}
          thumbnail={d.thumbnail}
        />
      ))}
    </div>
  );
};

export default Recent;
