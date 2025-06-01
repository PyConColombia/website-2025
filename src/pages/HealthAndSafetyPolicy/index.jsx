import PropTypes from 'prop-types';

import GenericPage from '../Generic';

const HealthAndSafetyPolicy = ({ dataTranslate }) => {
  const content = (
    <>
      <p>{dataTranslate?.healthAndSafetyPolicy?.paragraph1}</p>
      <br />
      <p>{dataTranslate?.healthAndSafetyPolicy?.paragraph2}</p>
    </>
  );

  return <GenericPage title={dataTranslate?.healthAndSafetyPolicy?.title} content={content} />;
};

HealthAndSafetyPolicy.propTypes = {
  dataTranslate: PropTypes.object.isRequired,
};

export default HealthAndSafetyPolicy;
