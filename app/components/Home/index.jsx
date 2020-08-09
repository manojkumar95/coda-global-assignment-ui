import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import { HomeRoutes } from '../../router';
import { loadHome } from '../../actions/candidate';
import Header from '../AppHeader';
import 'styles/Home.scss';

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadHome())
  }, [loadHome])

  return (
    <>
      <Header />
      <div className="home-container">
        {HomeRoutes()}
      </div>
    </>
  );
};

export default Home;
