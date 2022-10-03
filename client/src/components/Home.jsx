import Countries from "./Countries";
import SearchBar from "./SearchBar";
import FilterAndOrder from "./FilterAndOrder";
import ".././components/styles/Home.css";

export default function Home() {
  return (
    <div className="container_home">
      <FilterAndOrder></FilterAndOrder>
      <div className="container_in">
        <SearchBar></SearchBar>
      </div>
      <Countries />
    </div>
  );
}
