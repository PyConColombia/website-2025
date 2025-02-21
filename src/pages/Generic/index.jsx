import PropTypes from 'prop-types';

const GenericPage = ({ title, content }) => {
  return (
    <>
      <h1>{title}</h1>
      <h1>{title}</h1>
      <h1>{title}</h1>
      <h1>{title}</h1>
      <div>{content}</div>
    </>
  );
};

GenericPage.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default GenericPage;
