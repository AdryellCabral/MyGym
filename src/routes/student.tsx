import { Switch, Route } from "react-router-dom";
import HomeStudent from "../pages/Student/HomeStudent";
import Exercices from "../pages/Student/Exercices";
import Workouts from "../pages/Student/Workouts";
import WorkoutStudent from "../pages/Student/WorkoutStudent";
import PhysicalAssessment from "../pages/Student/PhysicalAssessment";
import Feed from "../pages/Student/Feed";
import ConfigPage from "../pages/Student/Config";

const StudentRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeStudent} />
      <Route path="/exercises" component={Exercices} />
      <Route path="/workouts" component={Workouts} />
      <Route exact path="/workout/:id" component={WorkoutStudent} />
      <Route path="/assessment" component={PhysicalAssessment} />
      <Route path="/feeding" component={Feed} />
      <Route path="/settings" component={ConfigPage} />
    </Switch>
  );
};

export default StudentRoutes;
