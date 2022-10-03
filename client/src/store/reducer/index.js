import {
  GET_ALL_COUNTRIES,
  SEARCH_COUNTRY,
  COUNTRY_BY_ID,
  CREATE_ACTIVITY,
  FILTER_BY_CONTINENT,
  SORT_COUNTRIES_ALPHA,
  SORT_COUNTRIES_POPULATION,
  FILTER_BY_ACTIVITY,
  GET_ACTIVITIES,
} from "../actions/index";

const initialState = {
  countries: [],
  countriesSupport: [],
  // countryFound: [],
  countriesActivity: [],
  activities: [],
  withoutActivity: [],
  isActivity: false,
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        countriesSupport: action.payload,
        isActivity: false,
      };

    case SEARCH_COUNTRY:
      return {
        ...state,
        countries: action.payload,
        isActivity: false,
      };

    case COUNTRY_BY_ID:
      return {
        ...state,
        countryFound: action.payload,
        isActivity: false,
      };

    case CREATE_ACTIVITY:
      return {
        ...state,
      };

    case FILTER_BY_CONTINENT:
      let filteredCountries =
        action.payload === "All"
          ? state.countriesSupport
          : state.countriesSupport.filter(
              (country) => country.continent === action.payload
            );
      return {
        ...state,
        countries: filteredCountries,
        isActivity: false,
      };

    case FILTER_BY_ACTIVITY:
      let countriesWithActivities = [];
      let filterCountries = [];
      let activitiesFromCountries = [];

      if (action.payload === "allActivities") {
        filterCountries = state.countriesSupport?.filter(
          (country) => country.activities.length > 0
        );
      } else {
        countriesWithActivities = state.countriesSupport?.filter(
          (country) => country.activities.length > 0
        );
        countriesWithActivities.forEach((country) => {
          country.activities.forEach((activity) => {
            if (activity.name.toLowerCase() === action.payload.toLowerCase()) {
              filterCountries.push(country);
              activitiesFromCountries.push(activity.name.toUpperCase());
            }
          });
        });
      }

      return {
        ...state,
        countriesActivity: filterCountries,
        isActivity: true,
      };

    case SORT_COUNTRIES_ALPHA:
      let orderedCountries = [...state.countriesSupport];

      orderedCountries = orderedCountries.sort((a, b) => {
        if (a.name < b.name) return action.payload === "increasing" ? -1 : 1;
        if (a.name > b.name) return action.payload === "increasing" ? 1 : -1;
        return 0;
      });
      return {
        ...state,
        countries: orderedCountries,

        isActivity: false,
      };

    case SORT_COUNTRIES_POPULATION:
      let orderedCountriesForPopulation = [...state.countriesSupport];

      orderedCountriesForPopulation = orderedCountriesForPopulation.sort(
        (a, b) => {
          if (a.population < b.population)
            return action.payload === "increasing" ? -1 : 1;
          if (a.population > b.population)
            return action.payload === "increasing" ? 1 : -1;
          return 0;
        }
      );

      return {
        ...state,
        countries: orderedCountriesForPopulation,
        isActivity: false,
      };

    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    // case DELETE_ACTIVITY:
    //   console.log("el gato está dormido", action.payload);
    //   console.log("UUUUUUUUU", state.countryFound);
    //   let actis = state.countryFound.activities;

    //   let noActivity = actis.filter(
    //     (a) => a.name.toLowerCase() !== action.payload.toLowerCase()
    //   );
    //   state.countryFound.activities = noActivity;
    //   console.log("actis", actis);
    //   console.log("no actis", noActivity);
    //   return {
    //     ...state,
    //     withoutActivity: state.countryFound,
    //   };

    default:
      return state;
  }
}
