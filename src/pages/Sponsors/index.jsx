import PropTypes from 'prop-types';

import SponsorsList from './components/SponsorsList';

const Sponsors = ({ dataTranslate }) => {
  return (
    <SponsorsList
      title={`${dataTranslate?.sponsors?.title}:`}
      description={dataTranslate?.sponsors?.description}
      footer={dataTranslate?.sponsors?.thankYouMessage}
    />
  );
};

Sponsors.propTypes = {
  dataTranslate: PropTypes.shape({
    sponsors: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      thankYouMessage: PropTypes.string
    })
  })
};

export default Sponsors;
