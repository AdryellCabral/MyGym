import { AnimatePresence } from "framer-motion";
import { Switch, Route } from "react-router-dom";

import { RegisterCoach } from "../pages/Academy/RegisterCoach";
import { RegisterStudent } from "../pages/Academy/RegisterStudent";

const AcademyRoutes = () => {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/register_coach" component={RegisterCoach} />
        <Route exact path="/register_student" component={RegisterStudent} />
      </Switch>
    </AnimatePresence>
  );
};

export default AcademyRoutes;
