import React, { Suspense, lazy } from 'react';
import {
  Router, Switch, Route, Redirect
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import AppLoader from 'components/Loader';
import ViewDetail from 'components/ViewDetail';

const Home = lazy(() => import('components/Home'));

const RedirectToHome = () => (
  <Redirect to="/home" />
);

export const AppRoutes = () => (
  <Router history={createBrowserHistory()}>
    <Suspense fallback={<AppLoader />}>
      <Switch>
        <Route path="/:tab" component={Home} />
        <Route component={RedirectToHome} />
      </Switch>
    </Suspense>
  </Router>
);

export const HomeRoutes = () => (
  <Switch>
    <Route path="/home" component={ViewDetail} />
    <Route component={RedirectToHome} />
  </Switch>
);
