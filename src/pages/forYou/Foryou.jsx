import { useContext } from "react";
import Input from "../../components/input/Input";
import Songcard from "../../components/songCard/Songcard";
import "./foryou.scss";
import AppContext from "../../context/AppContext";

const Foryou = () => {
  const { filtredData, setCurrentSong, setIsPlaying } =
    useContext(AppContext);

  return (
    <div className="foryou-body">
      <div className="title-text">For You</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Input />
        {filtredData.map((d, i) => (
          <Songcard
            onClick={() => {
              setCurrentSong(d), setIsPlaying(true);
            }}
            key={i}
            title={d.title}
            author={d.artistName}
            length={d.duration}
            thumbnail={d.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export default Foryou;
