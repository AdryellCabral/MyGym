import { AnimatePresence } from "framer-motion";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/Academy/Home";

import { RegisterCoach } from "../pages/Academy/RegisterCoach";
import { RegisterStudent } from "../pages/Academy/RegisterStudent";

const AcademyRoutes = () => {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route  path="/register_coach" component={RegisterCoach} />
        <Route  path="/register_student" component={RegisterStudent} />
      </Switch>
    </AnimatePresence>
  );
};

export default AcademyRoutes;
