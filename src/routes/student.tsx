import { Switch, Route } from "react-router-dom";
import HomeStudent from "../pages/HomeStudent";
import Exercices from "../pages/Exercices";

const StudentRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeStudent} />
      <Route path="/exercices" component={Exercices} />
    </Switch>
  );
};

export default StudentRoutes;
