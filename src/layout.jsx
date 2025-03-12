import PropTypes from 'prop-types';

import NavbarCustom from '@/components/NavbarCustom';
import Footer from '@/components/Footer';
import Subscribe from './components/Subscribe';

const Layout = ({ children, dataTranslate, locales }) => {
  return (
    <div>
      <NavbarCustom dataTranslate={dataTranslate} locales={locales} />
      <main>{children}</main>
      <Subscribe dataTranslate={dataTranslate}/>
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
