import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga4';

import LandingPage from '@/pages/LandingPage';
import Layout from '@/layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/main.css';
import Test from './pages/test';

const TRACKING_ID = 'G-J2DYL7NXX5';

const App = () => {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Layout>
  );
};

export default App;
