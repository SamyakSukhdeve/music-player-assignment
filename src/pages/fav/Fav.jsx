import Songcard from "../../components/songCard/Songcard";
import AppContext from "../../context/AppContext";
import "./fav.scss";

import React, { useContext } from "react";

const Fav = () => {
  const { fav } = useContext(AppContext);
  return (
    <div className="fav-body">
      <div className="fav-title">Favourites</div>
      {fav.length === 0 ? (
        <p className="no-fav-title">No favourites yet.</p>
      ) : (
        fav.map((d, i) => (
          <Songcard
            title={d.title}
            key={i}
            author={d.artistName}
            length={d.duration}
            thumbnail={d.thumbnail}
          />
        ))
      )}
    </div>
  );
};

export default Fav;
