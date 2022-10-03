/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../store/actions";
import Country from "./Country";
import Pagination from "./Pagination";
import "./styles/Countries.css";

export default function Countries() {
  let countries = useSelector((state) => state.countries);
  let countriesActivity = useSelector((state) => state.countriesActivity);
  let isActivity = useSelector((state) => state.isActivity);

  let dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [countriesByPage, setCountriesByPage] = useState(10);
  const indexOfLastCountry = currentPage * countriesByPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesByPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );
  function paginado(pageNumber) {
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  return (
    <div className="container_all">
      {isActivity ? (
        <div className="dad_pagination">
          {countriesActivity.length > 1 && (
            <Pagination
              countriesByPage={countriesByPage}
              countries={countriesActivity.length}
              paginado={paginado}
            />
          )}
        </div>
      ) : (
        <div className="dad_pagination">
          {currentCountries.length > 1 && (
            <Pagination
              countriesByPage={countriesByPage}
              countries={countries.length}
              paginado={paginado}
            />
          )}
        </div>
      )}

      {isActivity ? (
        countriesActivity.length > 0 ? (
          <div className="container_countries">
            {countriesActivity.map((country) => {
              return (
                <Country
                  key={country.id}
                  id={country.id}
                  flag={country.flag}
                  name={country.name}
                  continent={country.continent}
                />
              );
            })}
          </div>
        ) : (
          <div>No hay países con esta actividad</div>
        )
      ) : (
        <div className="container_countries">
          {currentCountries.map((country) => {
            return (
              <Country
                key={country.id}
                id={country.id}
                flag={country.flag}
                name={country.name}
                continent={country.continent}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
