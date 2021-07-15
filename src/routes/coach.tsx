import { Route, Switch } from "react-router-dom";
import Students from "../pages/Coach/Students";

const CoachRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Students} />
            <Route  path="/students" component={Students} />
        </Switch>
    );
}

export default CoachRoutes