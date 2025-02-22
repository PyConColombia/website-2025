import PropTypes from 'prop-types';

import NavbarCustom from '@/components/NavbarCustom';
import Footer from '@/components/Footer';
import Subscribe from './components/Subscribe';

const Layout = ({ children }) => {
  return (
    <div>
      <NavbarCustom />
      <main>{children}</main>
      <Subscribe />
      <Footer />
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
