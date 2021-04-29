import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "firebase/firestore";
import "firebase/auth";

import { lazy, Suspense } from "react";
import * as ROUTES from "./constants/routes";
import UserContext from "./context/user";
import useAuthListener from "./hooks/use-auth-listener";
import SecuredRoute from "./helpers/secure-route";

//This is where you add pages

const Login = lazy(() => import("./pages/login"));
const Signup = lazy(() => import("./pages/signup"));
const NotFound = lazy(() => import("./pages/not_found"));
const HomePage = lazy(() => import("./pages/home"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const Profile = lazy(() => import("./pages/profile"));
const Mission = lazy(() => import("./pages/missionvision"));
/////////////////////////////////////////////////////////

export default function App() {
  const { user } = useAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path={ROUTES.PROFILE} component={Profile} />
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.SIGN_UP} component={Signup} />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.MISSION} component={Mission}/>
            <SecuredRoute user={user} path={ROUTES.DASHBOARD} exact>
              <Dashboard />
            </SecuredRoute>
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}
