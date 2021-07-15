import { Route, Switch } from "react-router-dom";
import InfoStudent from "../pages/Coach/InfoStudent";
import Students from "../pages/Coach/Students";

const CoachRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Students} />
            <Route  path="/students/:id" component={InfoStudent} />
        </Switch>
    );
}

export default CoachRoutes