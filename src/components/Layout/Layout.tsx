import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {




  return (
    <div>
      <Header/>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
