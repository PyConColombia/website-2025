import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faGithubAlt,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

const Social = ({ socialNetworks }) => {
  return (
    <div className="social-icons d-flex justify-content-center justify-content-md-end align-items-center gap-3">
      {
        socialNetworks?.twitter && (
          <a
            href={`https://twitter.com/${socialNetworks.twitter}`}
            target="_blank"
            rel="noreferrer"
            className="social-icon">
            <div className="fa-stack">
              <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
              <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faXTwitter} />
            </div>
          </a>
        )
      }
      {
        socialNetworks?.linkedin && (
          <a
            href={`https://www.linkedin.com/in/${socialNetworks.linkedin}`}
            target="_blank"
            rel="noreferrer"
            className="social-icon">
            <div className="fa-stack">
              <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
              <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faLinkedinIn} />
            </div>
          </a>
        )
      }
      {
        socialNetworks?.facebook && (
          <a
            href={`https://www.facebook.com/${socialNetworks.facebook}`}
            target="_blank"
            rel="noreferrer"
            className="social-icon">
            <div className="fa-stack">
              <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
              <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faFacebookF} />
            </div>
          </a>
        )
      }
      {
        socialNetworks?.instagram && (
          <a
            href={`https://www.instagram.com/${socialNetworks.instagram}`}
            target="_blank"
            rel="noreferrer"
            className="social-icon">
            <div className="fa-stack">
              <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
              <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faInstagram} />
            </div>
          </a>
        )
      }
      {
        socialNetworks?.github && (
          <a
            href={`https://github.com/${socialNetworks.github}`}
            target="_blank"
            rel="noreferrer"
            className="social-icon">
            <div className="fa-stack">
              <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
              <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faGithubAlt} />
            </div>
          </a>
        )
      }
    </div>
  )
}

Social.propTypes = {
  socialNetworks: propTypes.shape({
    twitter: propTypes.string,
    linkedin: propTypes.string,
    facebook: propTypes.string,
    instagram: propTypes.string,
    github: propTypes.string
  })
}

export default Social