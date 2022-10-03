import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountry } from "../store/actions";
import "../components/styles/SearchBar.css";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const [name, setName] = useState("");
  let dispatch = useDispatch();

  function onChange(e) {
    setName(e.target.value);
    // console.log(name);
  }

  function onClick(e) {
    dispatch(searchCountry(name));
    setName("");
  }

  return (
    <div className="container_search">
      <div className="search">
        <input
          className="input_search"
          onChange={(e) => onChange(e)}
          type="text"
          placeholder="Search country..."
          value={name}
        />
        <button className="button_search" onClick={() => onClick(name)}>
          Search
        </button>
      </div>

      <div className="search_link">
        <Link to="/activities">
          <button className="button_home">Create Activity</button>
        </Link>
      </div>
    </div>
  );
}
