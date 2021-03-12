/* eslint-disable react/no-array-index-key */
import React from "react";
import { Switch, Route, Redirect,useHistory } from "react-router-dom";
import { useSelector} from 'react-redux';
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomeView";
import CoursePage from "./pages/CoursePageViewWithVideo";
import WishlistPage from "./pages/wishListView";
import ProfilePage from "./pages/ProfilePage";
import Login from './pages/Login/Login';

const renderRoutes = () => (
  <Switch>
    <Route path="/" exact>
      <Redirect to="/home" />
    </Route>
    <Route
      path="/home"
      exact
      render={(props) => (
        <>
          <MainLayout>
            <HomePage />
          </MainLayout>
        </>
      )}
    />
    <Route
      path="/personal"
      exact
      render={(props) => (
        <>
          <MainLayout>
            <CoursePage />
          </MainLayout>
        </>
      )}
    />
    <Route
      path="/wishlist"
      exact
      render={(props) => (
        <>
          <MainLayout>
            <WishlistPage />
          </MainLayout>
        </>
      )}
    />
    <Route
      path="/profile"
      exact
      render={(props) => (
        <>
          <MainLayout>
            <ProfilePage />
          </MainLayout>
        </>
      )}
    />
  </Switch>
);

function Routes() {
  return renderRoutes({});
}

export default Routes;
