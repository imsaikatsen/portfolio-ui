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
import About from "../components/ui/About";
import Projects from "../components/ui/Projects";
import Blog from "../components/ui/Blog";
import ProjectList from "../components/myprojects/ProjectList";

import LoginForm from "../pages/LoginForm";
import SignupForm from "../pages/SignupForm";
import Dashboard from "../components/Dashboard";
import UsersPage from "../pages/UsersPage";
import BlogList from "../components/BlogList";

import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/users/Home";
import "../App.css";
import TopBar from "../components/ui/TopBar";

const RouterComponent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div>
        <TopBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/blog" component={Blog} />

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
                <Route
                  exact
                  path="/admin/dashboard/users"
                  component={UsersPage}
                >
                  <MainContent content={<UsersPage />} />
                </Route>
                <Route exact path="/admin/dashboard/blogs" component={BlogList}>
                  <MainContent content={<BlogList />} />
                </Route>
                <Route
                  exact
                  path="/admin/dashboard/projects"
                  component={ProjectList}
                >
                  <MainContent content={<ProjectList />} />
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
      </div>
    </Router>
  );
};

export default RouterComponent;
