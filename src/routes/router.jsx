import React, { useState } from "react";
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
import PageNotFound from "../pages/PageNotFound";
import "../App.css";

const RouterComponent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login">
          <PublicLayout>
            <MainContent
              content={<LoginForm onLogin={() => setIsAuthenticated(true)} />}
            />
          </PublicLayout>
        </Route>
        <Route exact path="/signup">
          <PublicLayout>
            <MainContent content={<SignupForm />} />
          </PublicLayout>
        </Route>
        <Route path="/dashboard">
          <PrivateLayout isAuthenticated={isAuthenticated}>
            <Switch>
              <Route exact path="/dashboard/users" component={UsersPage}>
                <MainContent content={<UsersPage />} />{" "}
              </Route>
              <Route exact path="/dashboard/products" component={ProductsPage}>
                <MainContent content={<ProductsPage />} />
              </Route>
            </Switch>
          </PrivateLayout>
        </Route>

        {/* Catch-all route for the root path */}
        <Route>
          <PublicLayout>
            <MainContent content={<PageNotFound />} />
          </PublicLayout>
        </Route>
      </Switch>
    </Router>
  );
};

export default RouterComponent;
