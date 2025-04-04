import { Search } from "lucide-react";
import "./input.scss";

const Input = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search Song, Artist" />
      <Search className="search-icon" size={18} />
    </div>
  );
};

export default Input;
