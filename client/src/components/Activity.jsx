/* eslint-disable react-hooks/exhaustive-deps */
import "./styles/Activity.css";

export default function Activity({ name, season, duration, difficulty }) {
  return (
    <div className="contain_activity">
      <div className="activity_prop">
        Name: {name[0].toUpperCase() + name.slice(1)}
      </div>
      <div className="activity_prop">Season: {season}</div>
      <div className="activity_prop">Duration: {duration}</div>
      <div className="activity_prop">Difficulty: {difficulty}</div>
    </div>
  );
}
