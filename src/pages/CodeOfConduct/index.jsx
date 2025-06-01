import PropTypes from 'prop-types';
import GenericPage from '../Generic';

const CodeOfConduct = ({dataTranslate})  => {
  const content = (
    <>
      <p>
      <strong>{dataTranslate?.codeOfConduct?.introBold}</strong>{dataTranslate?.codeOfConduct?.intro}
      </p>
      <br />
      <h2>{dataTranslate?.codeOfConduct?.conductContent?.title}</h2>
      <br />
      <p>
      {dataTranslate?.codeOfConduct?.conductContent?.text}
      </p>
      <br />
      <h2>{dataTranslate?.codeOfConduct?.communityGoals?.title}</h2>
      <br />
      <ul>
      {dataTranslate?.codeOfConduct?.communityGoals?.items.map((topic, index) => (
                            <li key={index}>{topic}</li>
                          ))}
      </ul>
      <p>
      {dataTranslate?.codeOfConduct?.closingMessage}
      </p>
      <br />
      <h2>{dataTranslate?.codeOfConduct?.contactInfo?.title}</h2>
      <br />
      <p>
      {dataTranslate?.codeOfConduct?.contactInfo?.text}
      </p>
      <ul>
        <li>John Jairo Roa Acuña: john@pycon.co</li>
      </ul>
      <p>
      {dataTranslate?.codeOfConduct?.contactInfo?.securityNote}
      </p>
      <p>
      {dataTranslate?.codeOfConduct?.contactInfo?.escalationNote}
      </p>
    </>
  );

  return <GenericPage title={dataTranslate?.codeOfConduct?.title}content={content} />;
};

CodeOfConduct.propTypes = {
  dataTranslate: PropTypes.object.isRequired
};

export default CodeOfConduct;
