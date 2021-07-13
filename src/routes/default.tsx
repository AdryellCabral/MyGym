import { Switch, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
const DefaultRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
    </Switch>
  );
};

export default DefaultRoutes;
