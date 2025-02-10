import PropTypes from 'prop-types';

import NavbarCustom from '@/components/NavbarCustom';

const Layout = ({ children }) => {
  return (
    <div>
      <NavbarCustom />

      <main>{children}</main>
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
