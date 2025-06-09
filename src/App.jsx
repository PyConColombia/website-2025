import { useContext, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import Hotjar from '@hotjar/browser';

import LandingPage from '@/pages/LandingPage';
import Layout from '@/layout';

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'flag-icons/css/flag-icons.min.css';
import './App.scss';

import CodeOfConduct from '@/pages/CodeOfConduct';

import data from '@/translation';
import LanguageContext from '@/LanguageContext';
// import CallForProposals from '@/pages/CallForProposals';
import ScrollToTop from '@/utils/ScrollToTop';
import Sponsors from '@/pages/Sponsors';
import Sponsor from '@/pages/Sponsor';
import CodeOfConductProcedure from '@/pages/CodeOfConductProcedure';
import HealthAndSafetyPolicy from '@/pages/HealthAndSafetyPolicy';
import Keynotes from '@/pages/Keynotes';
import Scholarships from '@/pages/Scholarships';
import Speakers from '@/pages/Speakers';

const TRACKING_ID = 'G-J2DYL7NXX5';

const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
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
        <Route path="/sponsors" element={<Sponsors dataTranslate={allData} />} />
        <Route path="/sponsors/:id" element={<Sponsor />} />
        <Route path="/keynotes" element={<Keynotes dataTranslate={allData} />} />
        <Route path="/code-of-conduct" element={<CodeOfConduct dataTranslate={allData} />} />
        <Route
          path="/code-of-conduct-procedure"
          element={<CodeOfConductProcedure dataTranslate={allData} />}
        />
        <Route
          path="/health-and-safety-policy"
          element={<HealthAndSafetyPolicy dataTranslate={allData} />}
        />
        <Route
          path="/scholarships"
          element={<Scholarships dataTranslate={allData} />}
        />
        <Route
          path='/speakers'
          element={<Speakers dataTranslate={allData} />}
        />
        {/* <Route path="*" element={<LandingPage dataTranslate={allData} />} /> */}
      </Routes>
    </Layout>
  );
};

export default App;
