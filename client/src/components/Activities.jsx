import { useSelector } from "react-redux";
import Activity from "./Activity";
import "./styles/Activities.css";

export default function Activities() {
  let activities = useSelector((state) => state.countryFound.activities);

  return (
    <div className="activities_out">
      {activities?.map((activity) => {
        return (
          <div className="activities" key={activity.id}>
            <Activity
              name={activity.name}
              season={activity.season}
              duration={activity.duration}
              difficulty={activity.difficulty}
            />
          </div>
        );
      })}
    </div>
  );
}
