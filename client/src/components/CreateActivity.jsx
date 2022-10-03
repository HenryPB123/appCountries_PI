/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { createActivity, getAllCountries } from "../store/actions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/CreateActivity.css";

export default function CreateActivity() {
  const dispatch = useDispatch();
  let countries = useSelector((state) => state.countries);

  const [input, setInput] = useState({
    countries: [],
    nameActivity: "",
    difficulty: 0,
    duration: "",
    season: "",
  });

  const [errors, setErrors] = useState({
    countries: "",
    nameActivity: "",
    difficulty: "",
    duration: "",
    season: "",
  });

  const validate = () => {
    let errors = {};
    if (input.nameActivity.length <= 0) {
      setErrors({
        ...errors,
        nameActivity: "Se requiere un nombre para la actividad",
      });
    } else if (input.difficulty === 0) {
      setErrors({
        ...errors,
        difficulty: "Debes agregar un valor númerico",
      });
    } else if (input.difficulty > 5 || input.difficulty < 1) {
      setErrors({
        ...errors,
        difficulty: "El valor númerico debe estar en rango de 1 a 5",
      });
    } else if (input.duration.length <= 0) {
      setErrors({
        ...errors,
        duration:
          "Debes agregar el tiempo que dura la actividad especificando horas,semanas,etc",
      });
    } else if (input.season.length <= 0) {
      setErrors({
        ...errors,
        season:
          "Debes selecionar una temporada donde se va a llevar a cabo la actividad",
      });
    } else if (input.countries.length <= 0) {
      setErrors({
        ...errors,
        countries:
          "Debes elegir uno o más países a los que les vas a crear la actividad",
      });
    } else {
      dispatch(createActivity(input));
      alert("actvidad creada");
      setInput({
        countries: [],
        nameActivity: "",
        difficulty: 0,
        duration: "",
        season: "",
      });
    }
  };
  useEffect(() => {
    dispatch(getAllCountries());
  }, []);
  // console.log(countries);

  function handleInputChange(e) {
    if (e.target.name === "difficulty") {
      setInput({
        ...input,

        [e.target.name]: Number(e.target.value),
      });
    } else {
      setInput({
        ...input,

        [e.target.name]: e.target.value,
      });
    }
    console.log(e.target.value);
  }

  function handleCheck(e, season) {
    console.log(e);
    if (e.target.checked) {
      console.log(e.target.checked);
      setInput({
        ...input,
        season: season,
      });
    } else {
      alert("Debes elegir una temporada");
    }
  }

  function handleDelete(country) {
    setInput({
      ...input,
      countries: input.countries.filter((c) => c !== country),
    });
  }

  function handleSelect(e) {
    let ab = [...input.countries, e.target.value];
    let filtrado = ab.filter((v, i) => {
      return ab.indexOf(v) === i;
    });

    setInput({
      ...input,
      countries: filtrado,
    });

    // console.log(e.target.value);
  }

  function handleSubmit(e) {
    validate();
    e.preventDefault();
  }
  console.log("AAAAAA", input.countries);
  return (
    <div className="form_home">
      <form className="container_form">
        <h1 className="title_acti">Create Activity</h1>
        <div>
          <label className="label_acti" htmlFor="1">
            Name:{" "}
          </label>
          <input
            id="1"
            type="text"
            name="nameActivity"
            value={input.nameActivity}
            onChange={(e) => handleInputChange(e)}
          />
          {errors.nameActivity && (
            <p className="p_acti ">{errors.nameActivity}</p>
          )}
        </div>

        <br />
        <div>
          <label className="title_acti" htmlFor="2">
            Difficulty:{" "}
          </label>
          <input
            id="2"
            type="number"
            name="difficulty"
            value={input.difficulty}
            // min={1}
            // max={5}
            onChange={(e) => handleInputChange(e)}
          />
          {errors.difficulty && <p className="p_acti ">{errors.difficulty}</p>}
        </div>

        <br />
        <div>
          <label className="title_acti" htmlFor="3">
            Duration:{" "}
          </label>
          <input
            id="3"
            type="text"
            name="duration"
            value={input.duration}
            onChange={(e) => handleInputChange(e)}
          />
          {errors.duration && <p className="p_acti ">{errors.duration}</p>}
        </div>

        <br />
        <div>
          <label className="title_acti" htmlFor="4">
            <div>Seasons</div>
          </label>
          <label className="title_acti" htmlFor="summer">
            Summer
            <input
              id="summer"
              type="radio"
              name="seasons"
              value="summer"
              onChange={(e) => handleCheck(e, "summer")}
            />
          </label>
          <label className="title_acti" htmlFor="autumn">
            Autumn
            <input
              id="autumn"
              type="radio"
              name="seasons"
              value="autumn"
              onChange={(e) => handleCheck(e, "autumn")}
            />
          </label>

          <label className="title_acti" htmlFor="winter">
            Winter
            <input
              id="winter"
              type="radio"
              name="seasons"
              value="winter"
              onChange={(e) => handleCheck(e, "winter")}
            />
          </label>

          <label className="title_acti" htmlFor="spring">
            Spring
            <input
              id="spring"
              type="radio"
              name="seasons"
              value="spring"
              onChange={(e) => handleCheck(e, "spring")}
            />
          </label>
          {errors.season && <p className="p_acti ">{errors.season}</p>}
        </div>

        <br />
        <div>
          <label className="title_acti" htmlFor="5">
            <div>Add activity to country</div>{" "}
          </label>

          <select onChange={(e) => handleSelect(e)}>
            <option value=""></option>

            {countries.map((country) => {
              return (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              );
            })}
          </select>
          {errors.countries && <p className="p_acti ">{errors.countries}</p>}
          <br />

          <br />
          <label className="title_acti" htmlFor="ulCountries">
            <div>List countries to send</div>
          </label>
          <ul id="ulCountries">
            {input.countries.map((country) => (
              <div key={country} className="label_acti">
                {country}
                <button
                  className="button_delete_country"
                  onClick={() => handleDelete(country)}
                >
                  X
                </button>
              </div>
            ))}
          </ul>
        </div>

        <button
          className="button_acti"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Create Activity
        </button>
        <Link to="/home">
          <button className="button_acti">Back Home</button>
        </Link>
      </form>
    </div>
  );
}
