import { Switch, Route } from "react-router-dom";
import HomePageAdm from "../pages/Home-ADM";
import LandingPage from "../pages/LandingPage";
const DefaultRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={HomePageAdm} />
    </Switch>
  );
};

export default DefaultRoutes;
