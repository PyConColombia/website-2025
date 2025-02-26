import { useContext, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import Hotjar from '@hotjar/browser';

import LandingPage from '@/pages/LandingPage';
import Layout from '@/layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/main.css';

import CodeOfConduct from './pages/CodeOfConduct';

import data from './translation';
import LanguageContext from '@/LanguageContext';
import CallForProposals from '@/pages/CallForProposals';
import ScrollToTop from '@/utils/ScrollToTop';

const TRACKING_ID = 'G-J2DYL7NXX5';

const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send('pageview');
  }, [location]);

  return <></>;
};

const App = () => {
  const locales = Object.keys(data);
  const { language } = useContext(LanguageContext);
  const [allData, setAllData] = useState({});

  useEffect(() => {
    setAllData(data[language]);
  }, [language, allData]);

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    const siteId = 5318357;
    const hotjarVersion = 6;

    Hotjar.init(siteId, hotjarVersion);
  }, []);

  return (
    <Layout dataTranslate={allData} locales={locales}>
      <ScrollToTop />
      <PageViewTracker />
      <Routes>
        <Route path="/" element={<LandingPage dataTranslate={allData} />} />
        <Route path="/call-for-proposals" element={<CallForProposals dataTranslate={allData} />} />
        <Route path="/code-of-conduct" element={<CodeOfConduct />} />
      </Routes>
    </Layout>
  );
};

export default App;
