import { Switch, Route } from "react-router-dom";
import LandingPage from "../pages/Default/LandingPage";
import RegisterUser from "../pages/Default/RegisterUser";
import LoginUser from "../pages/Default/LoginUser";

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
