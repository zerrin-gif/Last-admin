import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { RatingPage } from "./pages/RatingPage";
import { DashboardPage } from "./pages/DashboardPage";
import { CommentPage } from "./pages/CommentPage";
import { UserPage } from "./pages/UserPage";
import { AddCategoryPage } from "./pages/AddCategoryPage";
import { CategoryListPage } from "./pages/CategoryListPage";
import { AddMoviePage } from "./pages/AddMoviePage";
import { MovieListPage } from "./pages/MovieListPage";
import { AddShowPage } from "./pages/AddShowPage";
import { ShowListPage } from "./pages/ShowListPage";
import { LoginPage } from "./pages/LoginPage";




// const GoogleMaterialPage = lazy(() =>
//   import("./modules/GoogleMaterialExamples/GoogleMaterialPage")
// );
// const ReactBootstrapPage = lazy(() =>
//   import("./modules/ReactBootstrapExamples/ReactBootstrapPage")
// );
// const ECommercePage = lazy(() =>
//   import("./modules/ECommerce/pages/eCommercePage")
// );
// const UserProfilepage = lazy(() =>
//   import("./modules/UserProfile/UserProfilePage")
// );

export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/rating" component={RatingPage} />
        <ContentRoute path="/comment" component={CommentPage} />
        <ContentRoute path="/user" component={UserPage} />
        <ContentRoute path="/category/add-category" component={AddCategoryPage} />
        <ContentRoute path="/category/category-list" component={CategoryListPage} />
        <ContentRoute path="/movie/add-movie" component={AddMoviePage} />
        <ContentRoute path="/movie/movie-list" component={MovieListPage} />
        <ContentRoute path="/show/add-show" component={AddShowPage} />
        <ContentRoute path="/show/show-list" component={ShowListPage} />
        <ContentRoute path="/pages/login" component={LoginPage} />



        {/* <ContentRoute path="/builder" component={BuilderPage} /> */}
        
        {/* <Route path="/google-material" component={GoogleMaterialPage} />
        <Route path="/react-bootstrap" component={ReactBootstrapPage} />
        <Route path="/e-commerce" component={ECommercePage} />
        <Route path="/user-profile" component={UserProfilepage} />
        <Redirect to="error/error-v1" /> */}
      </Switch>
    </Suspense>
  );
}
