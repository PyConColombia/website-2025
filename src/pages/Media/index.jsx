import PropTypes from 'prop-types';

import MediaList from './components/MediaList';

const Media = ({ dataTranslate }) => {
  const d = dataTranslate?.media;

  return (
    <MediaList
      title={d?.title}
      description={d?.description}
      readArticleLabel={d?.readArticle}
    />
  );
};

Media.propTypes = {
  dataTranslate: PropTypes.object
};

export default Media;
