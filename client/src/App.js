import "./App.css";
import { Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Home from "./components/Home";
import CountryDetails from "./components/CountryDetails";
import CreateActivity from "./components/CreateActivity";

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Main />
      </Route>

      <Switch>
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/country/:id">
          <CountryDetails />
        </Route>

        <Route path="/activities">
          <CreateActivity />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
