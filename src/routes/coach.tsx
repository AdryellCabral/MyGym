import { Route, Switch } from "react-router-dom";
import CoachConfig from "../pages/Coach/Config";
import Students from "../pages/Coach/Students";

const CoachRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Students} />
      <Route path="/students" component={Students} />
      <Route path="/settings" component={CoachConfig} />
    </Switch>
  );
};

export default CoachRoutes;
