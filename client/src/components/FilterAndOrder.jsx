/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByActivity,
  filterByContinent,
  getActivities,
  sortCountriesAlpha,
  sortCountriesPopulation,
} from "../store/actions";
import "./styles/FilterAndOrder.css";

export default function Filter() {
  let dispatch = useDispatch();
  const [continents, setContinents] = useState("");
  const [activities, setActivities] = useState("");
  const [population, setPopulation] = useState("");
  const [order, setOrder] = useState("");
  let noRepeatActis = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getActivities());
  }, []);

  function onSelectChange(e) {
    // console.log(e.target.value);
    setContinents(e.target.value);
    setActivities("");
    setPopulation("");
    setOrder("");

    dispatch(filterByContinent(e.target.value));
  }

  function onSelectChangeActivities(e) {
    // console.log(e.target.value);
    setActivities(e.target.value);
    setContinents("");
    setPopulation("");
    setOrder("");
    dispatch(filterByActivity(e.target.value));
  }

  function onSelectChangeOrder(e) {
    // console.log(e.target.value);
    setOrder(e.target.value);
    setActivities("");
    setContinents("");
    setPopulation("");
    dispatch(sortCountriesAlpha(e.target.value));
  }

  function onSelectChangePopulation(e) {
    // console.log(e.target.value);
    setPopulation(e.target.value);
    setActivities("");
    setContinents("");
    setOrder("");
    dispatch(sortCountriesPopulation(e.target.value));
  }
  // console.log("UUUUU", noRepeatActis);

  return (
    <div className="contain_filter">
      <div className="filters">
        <div>
          <label className="labels" htmlFor="continents">
            Continents
          </label>
        </div>
        <div>
          <select
            className="select"
            id="continents"
            name="continents"
            value={continents}
            onChange={(e) => onSelectChange(e)}
          >
            <option value=""></option>

            <option value="All">All continents</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Antarctic">Antarctica</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europa</option>
            <option value="Oceania">Oceanía</option>
          </select>
        </div>
      </div>

      <div className="filters">
        <div>
          <label className="labels" htmlFor="activities">
            Activities
          </label>
        </div>
        <div>
          <select
            className="select"
            id="activities"
            name="activities"
            value={activities}
            onChange={(e) => onSelectChangeActivities(e)}
          >
            <option value=""></option>
            <option value="allActivities">All Activities</option>
            {noRepeatActis &&
              noRepeatActis.map((acti) => {
                return (
                  <option key={acti} value={acti}>
                    {acti}
                  </option>
                );
              })}
          </select>
        </div>
      </div>

      <div className="filters">
        <div>
          <label className="labels" htmlFor="orderAlpha">
            Alphabetical Order
          </label>
        </div>
        <div>
          <select
            className="select"
            name="orderAlpha"
            id="orderAlpha"
            value={order}
            onChange={(e) => onSelectChangeOrder(e)}
          >
            <option value=""></option>

            <option value="increasing">Ascendant</option>
            <option value="decreasing">Descendant</option>
          </select>
        </div>
      </div>

      <div className="filters">
        <div>
          <label className="labels" htmlFor="orderPopulation">
            Population Order
          </label>
        </div>
        <div>
          <select
            className="select"
            name="orderPopulation"
            id="orderPopulation"
            value={population}
            onChange={(e) => onSelectChangePopulation(e)}
          >
            <option value=""></option>

            <option value="increasing">Ascendant</option>
            <option value="decreasing">Descendant</option>
          </select>
        </div>
      </div>
    </div>
  );
}
