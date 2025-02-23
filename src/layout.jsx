import PropTypes from 'prop-types';

import NavbarCustom from '@/components/NavbarCustom';
import Footer from '@/components/Footer';
import Subscribe from './components/Subscribe';

const Layout = ({
  children,
  lang,
  // dataTranslate,
  setLang,
  locales
}) => {
  return (
    <div>
      <NavbarCustom
        // dataTranslate={dataTranslate}
        lang={lang}
        setLang={setLang}
        locales={locales}
      />
      <main>{children}</main>
      <Subscribe />
      <Footer />
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  dataTranslate: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
  setLang: PropTypes.func.isRequired,
  locales: PropTypes.array.isRequired
};

export default Layout;
