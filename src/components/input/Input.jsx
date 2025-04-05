import { Search } from "lucide-react";
import "./input.scss";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

const Input = () => {
  const { setFiltredData, data } = useContext(AppContext);

  const handleChange = (e) => {
    e.preventDefault();
    const filterlist = data.filter((d) =>
      d.title.toLowerCase().includes(e.target.value)
    );
    setFiltredData(filterlist);
  };

  return (
    <div className="search-bar">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Search Song, Artist"
      />
      <Search className="search-icon" size={18} />
    </div>
  );
};

export default Input;
