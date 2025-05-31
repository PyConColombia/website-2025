import GenericPage from '../Generic';
import Questions from './Components/Questions';

const Scholarships = ({ dataTranslate }) => {
  const d = dataTranslate?.scholarships;
  const content = (
    <>
      <p>{d?.paragraph1}</p>
      <p>{d?.paragraph2}</p>
      <p>{d?.paragraph3}</p>
      <p>
        {d?.paragraph4Text}{' '}
        <a href={d?.formLink} target="_blank" className="link-pink" rel="noopener noreferrer">
          {d?.formLinkText}
        </a>
      </p>
      <Questions dataTranslate={dataTranslate} />
    </>
  );

  return <GenericPage title={d?.title} content={content} />;
};

export default Scholarships;
