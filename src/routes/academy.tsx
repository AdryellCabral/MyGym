import { AnimatePresence } from "framer-motion";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/Academy/Home";
import AcademyConfig from "../pages/Academy/ConfigPage";

import { RegisterCoach } from "../pages/Academy/RegisterCoach";
import { RegisterStudent } from "../pages/Academy/RegisterStudent";

const AcademyRoutes = () => {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/register_coach" component={RegisterCoach} />
        <Route path="/register_student" component={RegisterStudent} />
        <Route path="/settings" component={AcademyConfig} />
      </Switch>
    </AnimatePresence>
  );
};

export default AcademyRoutes;
