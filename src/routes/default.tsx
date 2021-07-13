import { Switch, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import RegisterUser from "../pages/RegisterUser";
const DefaultRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/register" component={RegisterUser} />
    </Switch>
  );
};

export default DefaultRoutes;
