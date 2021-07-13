import { Switch, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginUser from "../pages/LoginUser";
const DefaultRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={LoginUser} />
    </Switch>
  );
};

export default DefaultRoutes;
