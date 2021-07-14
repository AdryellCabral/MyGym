import { Switch, Route } from "react-router-dom";
import HomeStudent from "../pages/HomeStudent";
<<<<<<< HEAD
import Exercices from "../pages/Exercices";
=======
>>>>>>> feat/HomeStudent

const StudentRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeStudent} />
<<<<<<< HEAD
      <Route path="/exercices" component={Exercices} />
=======
>>>>>>> feat/HomeStudent
    </Switch>
  );
};

export default StudentRoutes;
