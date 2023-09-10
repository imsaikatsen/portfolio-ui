// App.js
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import PrivateLayout from "../layouts/PrivateLayout";
import MainContent from "../components/MainContent";
import LoginForm from "../pages/LoginForm";
import SignupForm from "../pages/SignupForm";
import UsersPage from "../pages/UsersPage";
import ProductsPage from "../pages/ProductsPage";
import DashboardHome from "../pages/DashboardHome";
import PageNotFound from "../pages/PageNotFound";
import "../App.css";
import { useState } from "react";

const MyRouter = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route exact path="/login" component={LoginForm}>
          <PublicLayout>
            <MainContent content={<LoginForm />} />
          </PublicLayout>
        </Route>
        <Route exact path="/signup" component={SignupForm}>
          <PublicLayout>
            <MainContent content={<SignupForm />} />
          </PublicLayout>
        </Route>
        <Route path="/dashboard">
          <PrivateLayout isAuthenticated={isAuthenticated}>
            <Switch>
              <Route exact path="/dashboard/users" component={UsersPage}>
                <MainContent content={<UsersPage />} />
              </Route>
              <Route exact path="/dashboard/products" component={ProductsPage}>
                <MainContent content={<ProductsPage />} />
              </Route>
              <Route exact path="/dashboard" component={DashboardHome}>
                <MainContent content={<DashboardHome />} />
              </Route>
            </Switch>
          </PrivateLayout>
        </Route>
        {/* Catch-all route for the root path */}
        <Route component={PageNotFound}>
          <PublicLayout>
            <MainContent content={<PageNotFound />} />
          </PublicLayout>
        </Route>
      </Switch>
    </Router>
  );
};

export default MyRouter;
