import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';

import NavbarCustom from '@/components/NavbarCustom';
import Footer from '@/components/Footer';
import Subscribe from './components/Subscribe';

const Layout = ({ children, dataTranslate, locales }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="PyCon Colombia is the national conference for users and developers of the Python programming language. This year it will be in July." />
        <meta property="og:site_name" content="PyCon Colombia" />
        <meta property="og:title" content="PyCon Colombia | July 2025 | Colombia" />
        <meta property="og:description" content="PyCon Colombia 2025 will be the third national conference for users and developers of the Python programming language. This year it will be in July"
        />
        <meta property="og:image" content="/images/opimage.jpg" />
        <meta property="og:url" content="https://2025.pycon.co/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pyconcolombia" />
        <meta name="twitter:title" content="PyCon Colombia | July 2025 | Colombia" />
        <meta name="twitter:description" content="PyCon Colombia 2025 is the national conference for users and developers of the Python programming language. This year it will be in July" />
        <meta name="twitter:image" content="/images/opimage.jpg" />

        <title>PyCon Colombia 2025</title>
        <link rel="canonical" href="https://2025.pycon.co" />

      </Helmet>
      <NavbarCustom dataTranslate={dataTranslate} locales={locales} />
      <main>{children}</main>
      <Subscribe dataTranslate={dataTranslate} />
      <Footer dataTranslate={dataTranslate} />
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  dataTranslate: PropTypes.object.isRequired,
  locales: PropTypes.array.isRequired
};

export default Layout;
