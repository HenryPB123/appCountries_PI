/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { countryById } from "../store/actions";
import Activities from "./Activities";
import "./styles/CountryDetails.css";

export default function CountryDetails() {
  const { id } = useParams();
  let country = useSelector((state) => state.countryFound);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(countryById(id));
  }, []);
  return (
    <div className="detail_container">
      {country ? (
        <div className="detail_sub">
          <div>
            <h1 className="h1_details">{country.name}</h1>
          </div>
          <div className="detail_hp">
            <img className="image_detail" src={country.flag} alt="img" />

            <div className="details_in">
              <div className="deta">Capital: {country.capital}</div>
              <div className="deta">Continent: {country.continent}</div>
              <div className="deta">Subregion: {country.subregion}</div>
              <div className="deta">Area: {country.area} km2</div>
              <div className="deta">Population: {country.population}</div>
              <div className="deta">Id: {country.id}</div>
            </div>
          </div>

          <div className="details_actis">
            {country.activities.length > 0 && (
              <div className="detail_acti_down">
                <h3 className="title_actis">Actividades</h3>
                <Activities />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}

      <Link to="/home">
        <button className="details_button">Back</button>
      </Link>
    </div>
  );
}
