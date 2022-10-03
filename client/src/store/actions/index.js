import axios from "axios";

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const SEARCH_COUNTRY = "SEARCH_COUNTRY";
export const COUNTRY_BY_ID = "COUNTRY_BY_ID";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const SORT_COUNTRIES_ALPHA = " SORT_COUNTRIES_ALPHA";
export const SORT_COUNTRIES_POPULATION = " SORT_COUNTRIES_POPULATION";
export const FILTER_BY_ACTIVITY = " FILTER_BY_ACTIVITY";
export const GET_ACTIVITIES = " GET_ACTIVITIES";
export const DELETE_ACTIVITY = " DELETE_ACTIVITY";

export const getAllCountries = () => {
  return (dispatch) =>
    axios
      .get(`http://localhost:3001/countries`)
      .then((response) => {
        dispatch({
          type: GET_ALL_COUNTRIES,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error.message));
};

export const searchCountry = (name) => {
  return (dispatch) =>
    axios
      .get(`http://localhost:3001/countries?name=${name}`)
      .then((response) => {
        dispatch({
          type: SEARCH_COUNTRY,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error.message));
};

export const countryById = (id) => {
  return async (dispatch) =>
    await axios
      .get(`http://localhost:3001/countries/${id}`)
      .then((response) => {
        return dispatch({
          type: COUNTRY_BY_ID,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error.message));
};

export const getActivities = () => {
  return async (dispatch) => {
    await axios.get(`http://localhost:3001/activities`).then((response) => {
      return dispatch({
        type: GET_ACTIVITIES,
        payload: response.data,
      });
    });
  };
};

export const filterByContinent = (continent) => {
  return {
    type: FILTER_BY_CONTINENT,
    payload: continent,
  };
};

export const filterByActivity = (nameActivity) => {
  return {
    type: FILTER_BY_ACTIVITY,
    payload: nameActivity,
  };
};

export const sortCountriesAlpha = (order) => {
  return {
    type: SORT_COUNTRIES_ALPHA,
    payload: order,
  };
};
export const sortCountriesPopulation = (order) => {
  return {
    type: SORT_COUNTRIES_POPULATION,
    payload: order,
  };
};

export function deleteActivity(payload) {
  console.log("payloadsa", payload);
  return async (dispatch) => {
    await axios
      .get(`http://localhost:3001/activities/delete`, payload)
      .then((response) => {
        return response;
      });
  };
}

export const createActivity = (activity) => {
  return (dispatch) => {
    return axios
      .post(`http://localhost:3001/activities`, activity)
      .then((response) => {
        return response;
      });
  };
};
