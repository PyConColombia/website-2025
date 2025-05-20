import GenericPage from '../Generic';
import Questions from './Components/Questions';

const Scholarships = () => {
  const content = (
    <>
      <p>
        Python&apos;s presence in software development worldwide continues to increase,
        leading to new outcomes changing our time. At PyCon Colombia, in addition to
        promoting open source and sharing among all attendees, we strive every year to
        ensure that our community is as accessible and diverse as possible. We see diversity
        and inclusion as a benefit to the ecosystem and its individuals.
      </p>
      <p>
        We aim for PyCon Colombia to be inclusive of the entire Python community in our
        country. In order to help alleviate financial barriers to attending the conference,
        the PyCon organizing committee is offering scholarships to individuals who face
        financial obstacles, including students and members of underrepresented groups
        within the Python community. These scholarships cover the cost of conference
        admission.
      </p>
      <p>
        It should be noted that scholarship recipients will be responsible for covering all
        other expenses, such as travel, accommodations, visa fees, and transportation.
      </p>
      <p>
        If you want to apply, please go to this form:{' '}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfHTHWoXpwtyyEdZEiU3DQdyvBcuwd42k72OnVcPrOSjljHhQ/viewform"
          target="blank_">
          Link form
        </a>
      </p>
      <Questions />
    </>
  )

  return <GenericPage title={'Diversity Scholarships'} content={content} />;
}

export default Scholarships;