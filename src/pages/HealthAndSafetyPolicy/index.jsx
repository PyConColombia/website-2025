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

export default HealthAndSafetyPolicy;
