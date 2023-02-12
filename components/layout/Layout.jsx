import Header from './Header/Header';
import Footer from './Footer/Footer';
import Image from "next/image";
import chataRuzenka from "../home/img/chataRuzenka.png";

const Layout = ({ children }) => {
  return (
    <>
        <div className="container">
      <Header />

      {children}
      <Footer />
        </div>
    </>
  );
};

export default Layout;
