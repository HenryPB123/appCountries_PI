import { Link } from "react-router-dom";
import "../components/styles/Main.css";

export default function Main() {
  return (
    <div className="containerMain">
      <div>
        <h1 className="title">Wellcome to countries app</h1>
      </div>
      <br />
      <Link to="/home">
        <div>
          <button className="button">Enter</button>
        </div>
      </Link>
    </div>
  );
}
