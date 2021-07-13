import { Switch, Route } from "react-router-dom";
import HomeStudent from "../pages/HomeStudent";
import Exercices from "../pages/Exercices";
import Workouts from "../pages/Workouts";

const StudentRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeStudent} />
      <Route path="/exercices" component={Exercices} />
      <Route path="/workouts" component={Workouts} />
      <Route path="/workouts/:id" />
    </Switch>
  );
};

export default StudentRoutes;
