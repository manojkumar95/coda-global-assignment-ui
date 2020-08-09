/**
 * Application entry point
 */

// Load application styles
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import { NotificationContainer } from 'react-notifications';
import { Provider } from 'react-redux';
import 'babel-polyfill';
import configureStore from './store/index';
import setupAxiosInterceptors from './globals/interceptors';
import { AppRoutes } from './router';
import '../assets/styles/index.scss';
import 'react-notifications/lib/notifications.css';

if (module.hot) {
  module.hot.accept();
}

const init = async() => {
  try {
    const store = await configureStore()

    setupAxiosInterceptors(store);

    ReactDOM.render(
      <Provider store={store}>
        {AppRoutes(store)}
        <NotificationContainer />
      </Provider>,
      document.getElementById('app')
    );

  } catch (err) {
    console.error('Error while initializing the app', err)
  }
}

init()
