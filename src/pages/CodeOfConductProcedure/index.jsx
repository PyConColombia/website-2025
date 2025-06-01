import PropTypes from 'prop-types';

import GenericPage from '../Generic';

const CodeOfConductProcedure = ({ dataTranslate }) => {
  const d = dataTranslate?.codeOfConductEnforcementProcedure;

  if (!d) {
    return <GenericPage title="Loading..." content={<p>Loading content...</p>} />;
  }

  const createList = (items) =>
    items.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item }} />);

  const createParagraphs = (items) =>
    items.map((item, i) => <p key={i}>{item}</p>);

  const content = (
    <>
      <p>{d.summaryIntro}</p>
      <br />
      <h1>{d.summaryHeader}</h1>
      <p>{d.summaryStepsIntro}</p>
      <br />
      <ol>{createList(d.summarySteps)}</ol>

      <br />
      <h1>{d.acknowledgeReportHeader}</h1>
      <p>{d.acknowledgeReportText}</p>

      <br />
      <h1>{d.conflictInterestHeader}</h1>
      <p>{d.conflictInterestExamplesIntro}</p>
      <br />
      <ul>{createList(d.conflictInterestExamples)}</ul>

      <br />
      <p>{d.conflictInterestNote1}</p>
      <br />
      <p>{d.conflictInterestNote2}</p>

      <br />
      <p>{d.evaluatingReportHeader}</p>
      <br />

      <h2>{d.jurisdictionHeader}</h2>
      <br />
      {createParagraphs(d.jurisdictionPoints)}

      <br />
      <h2>{d.impactHeader}</h2>
      <br />
      {createParagraphs(d.impactPoints)}

      <br />
      <h2>{d.riskHeader}</h2>
      <br />
      {createParagraphs(d.riskPoints)}
      <br />
      <p>{d.riskSummary}</p>

      <br />
      <h1>{d.proposeBehaviorPlanHeader}</h1>
      <br />
      <p>{d.proposeBehaviorPlanText}</p>
      <br />
      <p>{d.behaviorPlanNote}</p>
      <br />
      <ul>{createList(d.behaviorPlanExamples)}</ul>

      <br />
      <h1>{d.proposeConsequencesHeader}</h1>
      <br />
      <p>{d.proposeConsequencesText}</p>

      <br />
      <h2>{d.possiblePrivateResponsesHeader}</h2>
      <br />
      <ul>{createList(d.possiblePrivateResponses)}</ul>

      <br />
      <h1>{d.followUpReportedPersonHeader}</h1>
      <br />
      <p>{d.followUpReportedPersonText}</p>
      <br />
      <ul>{createList(d.followUpReportedPersonList)}</ul>
      <br />
      <p>{d.followUpReportedPersonNote}</p>

      <br />
      <h1>{d.decideFurtherResponseHeader}</h1>
      <br />
      <p>{d.decideFurtherResponseText}</p>

      <br />
      <h1>{d.followUpReporterHeader}</h1>
      <br />
      <p>{d.followUpReporterText1}</p>
      <br />
      <p>{d.followUpReporterText2}</p>
    </>
  );

  return <GenericPage title={d.title} content={content} />;
};

CodeOfConductProcedure.propTypes = {
  dataTranslate: PropTypes.object.isRequired,
};

export default CodeOfConductProcedure;
