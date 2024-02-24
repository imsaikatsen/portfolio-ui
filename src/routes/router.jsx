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
import Dashboard from "../components/Dashboard";
import UsersPage from "../pages/UsersPage";
// import ProductsPage from "../pages/ProductsPage";
import BlogList from "../components/BlogList";

import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/users/Home";
import "../App.css";

const RouterComponent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Switch>
        <Route exact path="/portfolio" component={Home} />
        <Route exact path="/" component={Home} />

        <Route exact path="/admin/dashboard/signin">
          <PublicLayout>
            <MainContent
              content={<LoginForm onLogin={() => setIsAuthenticated(true)} />}
            />
          </PublicLayout>
        </Route>
        <Route exact path="/admin/dashboard/signup">
          <PublicLayout>
            <MainContent content={<SignupForm />} />
          </PublicLayout>
        </Route>
        <Route>
          <PrivateLayout isAuthenticated={isAuthenticated}>
            <Switch>
              <Route exact path="/admin/dashboard" component={Dashboard}>
                <MainContent content={<Dashboard />} />
              </Route>
              <Route exact path="/admin/dashboard/users" component={UsersPage}>
                <MainContent content={<UsersPage />} />
              </Route>
              <Route exact path="/admin/dashboard/blogs" component={BlogList}>
                <MainContent content={<BlogList />} />
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
