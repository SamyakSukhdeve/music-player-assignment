import Input from "../../components/input/Input";
import Songcard from "../../components/songCard/Songcard";
import "./foryou.scss";

const Foryou = () => {
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
        <Songcard />
      </div>
    </div>
  );
};

export default Foryou;
