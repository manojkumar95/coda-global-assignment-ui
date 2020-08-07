import React from 'react';

import { HomeRoutes } from 'router';
import Header from '../AppHeader';
import 'styles/Home.scss';

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      {HomeRoutes()}
    </div>
  </>
);

export default Home;
