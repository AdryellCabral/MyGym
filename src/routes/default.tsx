import { Switch, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import RegisterUser from "../pages/RegisterUser";
import LoginUser from "../pages/LoginUser";
const DefaultRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/register" component={RegisterUser} />
      <Route path="/login" component={LoginUser} />
    </Switch>
  );
};

export default DefaultRoutes;
