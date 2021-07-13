import { Switch, Route } from "react-router-dom";
import HomeStudent from "../pages/HomeStudent";

const StudentRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeStudent} />
    </Switch>
  );
};

export default StudentRoutes;
