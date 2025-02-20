import { useEffect } from 'react';
import ReactGA from 'react-ga4';

import LandingPage from '@/pages/LandingPage';
import Layout from '@/layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/main.css';

const TRACKING_ID = 'G-J2DYL7NXX5';

const App = () => {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
  }, []);

  return (
    <Layout>
      <LandingPage />
    </Layout>
  );
};

export default App;
