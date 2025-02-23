import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga4';

import LandingPage from '@/pages/LandingPage';
import Layout from '@/layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/main.css';

import CodeOfConduct from './pages/CodeOfConduct';

import data from './translation';

const TRACKING_ID = 'G-J2DYL7NXX5';

const App = () => {
  const locales = Object.keys(data);
  const [lang, setLang] = useState('en');
  const [allData, setAllData] = useState({});

  useEffect(() => {
    setAllData(data[lang]);
  }, [lang, allData]);

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
  }, []);

  return (
    <Layout lang={lang} dataTranslate={allData} setLang={setLang} locales={locales}>
      <Routes>
        <Route path="/" element={<LandingPage dataTranslate={allData} />} />
        <Route path="/code-of-conduct" element={<CodeOfConduct />} />
      </Routes>
    </Layout>
  );
};

export default App;
