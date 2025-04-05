import GenericPage from '../Generic';

const HealthAndSafetyPolicy = () => {
  const content = (
    <>
      <p>
        Our attendees&apos; health and safety remain our top priority as we continue to monitor the
        state of the pandemic and look to venue, local, and CDC guidelines to make the best and most
        informed decisions around onsite safety and requirements. Python Colombia has worked hard to
        be a community that is welcoming to all so we will be erring on the side of safety for all
        participants.
      </p>
      <br />
      <p>
        PyCon Colombia will continue to provide social distancing where possible in the venue. The
        guidelines implemented for PyCon Colombia 2025 are subject to change based on health and
        safety recommendations at the time of the event. We are committing, however, to only make
        changes in the direction of greater protections.
      </p>
    </>
  );

  return <GenericPage title={'Health and Safety Policy'} content={content} />;
};

export default HealthAndSafetyPolicy;
