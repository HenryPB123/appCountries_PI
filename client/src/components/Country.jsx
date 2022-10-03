import { Link } from "react-router-dom";
import "../components/styles/Country.css";

export default function Country({ flag, name, continent, id }) {
  return (
    <div className="card-container">
      <div>
        <img className="img_country" src={flag} alt="img" />
      </div>
      <div className="title_country">
        <h5 className="h5_country">{name}</h5>
      </div>
      <div className="title_country">
        <p>Continent: {continent}</p>
      </div>
      <div>
        <Link to={`/country/${id}`}>
          <button className="button_more">More</button>
        </Link>
      </div>
    </div>
  );
}
