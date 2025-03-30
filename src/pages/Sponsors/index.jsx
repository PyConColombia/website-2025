import PropTypes from 'prop-types';

import { Col, Container, Row, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import SponsorsList from './components/SponsorsList';
import sponsorList from '@/data/sponsors.json';

const Sponsors =  ({ dataTranslate })  => {
  return (
    <SponsorsList
      title={`${dataTranslate?.sponsors?.title}:`}
      description={dataTranslate?.sponsors?.description}
      footer={dataTranslate?.sponsors?.thankYouMessage}
    />
  );
};

export default Sponsors;
