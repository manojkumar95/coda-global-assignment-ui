import React, { Suspense, lazy } from 'react';
import {
  Router, Switch, Route, Redirect
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import AppLoader from 'components/Loader';
import ViewDetail from 'components/ViewDetail';

const Home = lazy(() => import('components/Home'));
const Login = lazy(() => import('components/Login'));
const ViewCandidate = lazy(() => import('components/ViewCandidate'));

const RedirectToHome = () => (
  <Redirect to="/home" />
);

const isUserLoggedIn = (token) => {
  if (!token) {
    return false
  }
  const loginAuth = JSON.parse(token)

  return (loginAuth.authToken && loginAuth.authToken.length > 0)
}

export const history = createBrowserHistory({
  basename: '/'
})

export const AppRoutes = () => {
  const LoginRoute = ({ ...rest }) => (
    <Route
      {...rest} render={(props) => {
        const token = window.localStorage.getItem('coda-login-token')
        const isLoggedIn = isUserLoggedIn(token)
        return isLoggedIn ? <Home {...props} /> : <Login {...props} />
      }}
    />
  )

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest} render={(props) => {
        const token = window.localStorage.getItem('coda-login-token')
        const isLoggedIn = isUserLoggedIn(token)

        return isLoggedIn ? <Component {...props} /> : (
          <Redirect
            to='/login'
          />
        )
      }}
    />
  )

  return (
    <Router history={history}>
      <Suspense fallback={<AppLoader />}>
        <Switch>
          {/* <Route path="/:tab" component={Home} /> */}
          <LoginRoute path='/login' />
          {/* <Route component={RedirectToHome} /> */}
          <PrivateRoute path='/:tab' component={Home} />
          <PrivateRoute exact path='/' component={RedirectToHome} />
        </Switch>
      </Suspense>
    </Router>
  )
};

export const HomeRoutes = () => (
  <Switch>
    <Route path="/home" component={ViewDetail} />
    <Route path="/view-candidate/:candidateId" component={ViewCandidate} />
    <Route component={RedirectToHome} />
  </Switch>
);
